const { Router } = require('express');
const { mealsController } = require('../Controllers');

const routes = Router();

routes.get('/', mealsController.getData);

routes.get('/name', mealsController.getByName);

module.exports = routes;