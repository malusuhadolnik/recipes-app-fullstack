const { Router } = require('express');
const { mealsController } = require('../Controllers');

const routes = Router();

routes.get('/name', mealsController.getByName);

routes.get('/letter', mealsController.getByFirstLetter);

routes.get('/random', mealsController.getRandomRecipe);

routes.get('/category', mealsController.getByCategory);

routes.get('/area', mealsController.getByArea);

routes.get('/:id', mealsController.getById);

routes.get('/', mealsController.getData);

module.exports = routes;