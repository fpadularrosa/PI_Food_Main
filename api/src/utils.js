const {apiKey} = require('dotenv').config();
const { Diet } = require('./db.js');

module.exports = { 
    saveDiets: async () => {
        const dbDiets = await Diet.findAll();

        if(dbDiets.length) return;
        const { results } = await (await fetch(`https://api.spoonacular.com/recipes/complexSearch?number=100&apiKey=${apiKey}&addRecipeInformation=true`)).json();

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