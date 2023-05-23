const { Router } = require('express');
const { mealsController } = require('../Controllers');

const routes = Router();

routes.get('/', mealsController.getData);

routes.get('/categories', mealsController.listAllCategories);

routes.get('/areas', mealsController.listAllAreas);

module.exports = routes;