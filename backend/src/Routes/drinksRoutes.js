const { Router } = require('express');
const { drinksController } = require('../Controllers');

const routes = Router();

routes.get('/', drinksController.getData);

routes.get('/categories', drinksController.listAllCategories);

module.exports = routes;