const { Router } = require('express');
const { drinksController } = require('../Controllers');

const routes = Router();

routes.get('/:id', drinksController.getById);

routes.get('/', drinksController.getData);

routes.get('/name', drinksController.getByName);

routes.get('/letter', drinksController.getByFirstLetter);

routes.get('/random', drinksController.getRandomRecipe);

routes.get('/category', drinksController.getByCategory);

module.exports = routes;