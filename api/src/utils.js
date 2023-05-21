require('dotenv').config();
const apiKey = process.env.apiKey;
const { Diet } = require('./db.js');
const urlRecipeDetails = `https://api.spoonacular.com/recipes/complexSearch?number=100&apiKey=${apiKey}&addRecipeInformation=true`;

module.exports = { 
    urlRecipeDetails,
    saveDiets: async () => {
        const dbDiets = await Diet.findAll();

        if(dbDiets.length) return;
        const { results } = await (await fetch(urlRecipeDetails)).json();

        let diets = [];
        results.forEach(recipe => {
            diets.push(...recipe.diets);
        });

        diets = [...new Set(diets)];
        diets.forEach(diet => { 
            Diet.create(
                {
                    name: diet
                }
            )}
        );
    }
}