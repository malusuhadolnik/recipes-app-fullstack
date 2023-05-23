const { Router } = require('express');
const { mealsController } = require('../Controllers');

const routes = Router();

routes.get('/', mealsController.getData);

routes.get('/category', mealsController.getByCategory);

module.exports = routes;