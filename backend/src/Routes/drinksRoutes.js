const { Router } = require('express');
const { drinksController } = require('../Controllers');

const routes = Router();


routes.get('/ingredient', drinksController.getDrinkByIngredient);

routes.get('/name', drinksController.getByName);

routes.get('/letter', drinksController.getByFirstLetter);

routes.get('/random', drinksController.getRandomRecipe);

routes.get('/category', drinksController.getByCategory);

routes.get('/:id', drinksController.getById);


routes.get('/', drinksController.getData);

routes.get('/categories', drinksController.listAllCategories);



module.exports = routes;