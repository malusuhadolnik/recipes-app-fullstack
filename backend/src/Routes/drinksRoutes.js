const { Router } = require('express');
const { drinksController } = require('../Controllers');

const routes = Router();

routes.get('/', drinksController.getData);

routes.get('/name', drinksController.getByName);

module.exports = routes;