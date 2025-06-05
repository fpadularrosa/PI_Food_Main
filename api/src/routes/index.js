const { Router } = require('express');
require('dotenv').config();
const apiKey = process.env.apiKey;
const fetch = require('node-fetch');
const { Op } = require('sequelize');
const { Recipe, Diet } = require('../db.js');
require('events').EventEmitter.defaultMaxListeners = 15;
const router = Router();

router.get('/recipes', async (req, res) => {
    const { name } = req.query;

    let { results } = await (await fetch(`https://api.spoonacular.com/recipes/complexSearch?number=100&apiKey=${apiKey}&addRecipeInformation=true`)).json();

    let recipesAPI = results?.map(recipe => {
        return {
            id: recipe.id,
            name: recipe.title,
            score: recipe.aggregateLikes,
            healthScore: recipe.healthScore,
            diets: recipe.diets,
            image: recipe.image,
            dish: recipe.dishTypes
        }
    });

    let dataBaseRecipe = await Recipe.findAll({
        include: Diet
    });

    dataBaseRecipe = dataBaseRecipe.map(recipe => {
        return {
            id: recipe.id,
            name: recipe.name,
            score: recipe.score,
            healthScore: recipe.healthScore,
            diets: recipe.diets.map(diet => diet.name),
            image: recipe.image,
            dish: recipe.dish
        }
    });
    recipesAPI?.push(...dataBaseRecipe);
    
    if(name) recipesAPI = recipesAPI?.filter(recipe => recipe.name?.toLowerCase().includes(name.toLowerCase()));
    if(!recipesAPI?.length) return res.status(404).json('No existe ninguna receta.');

    res.json(recipesAPI);
});

router.get('/recipes/:idReceta', async (req, res)=> {
    const { idReceta } = req.params;

    let totalDetails;

    if(idReceta.length < 32) totalDetails = await (await fetch(`https://api.spoonacular.com/recipes/${idReceta}/information?apiKey=${apiKey}`)).json();
    else totalDetails = await Recipe.findOne({where: {id: idReceta}, include: Diet});

    const details = {
        name: totalDetails.title || totalDetails.name,
        summary: totalDetails.summary.replace(/<[^>]+>/g, '') || totalDetails.summary,
        score: totalDetails.aggregateLikes || totalDetails.score,
        healthScore: totalDetails.healthScore,
        steps: totalDetails.instructions?.replace(/<[^>]+>/g, '') || totalDetails.steps,
        diets: totalDetails.diets || totalDetails.diets.map(d => d.name),
        image: totalDetails.image,
        dish: totalDetails.dishTypes || totalDetails.dish
    };

    res.json(details);
});

router.get('/types', async (req, res) => {
    const diets = await Diet.findAll();

    res.json(diets);
})

router.post('/recipe', async (req, res) => {
    const { name, summary, score, healthScore, steps, diets, image, dishtype } = req.body;

    const newRecipe = Recipe.create({
        name,
        image,
        summary,
        score,
        healthScore,
        steps,
        dish: dishtype
    })
    .then(recipe => diets?.forEach(diet => Diet.findOne({
        where: {name: {[Op.substring]: diet}
    }}).then(diet => recipe.addDiet(diet.id))))
    
    res.send(newRecipe);
})

module.exports = router;
