const { Router } = require('express');
const { drinksController } = require('../Controllers');

const routes = Router();

routes.get('/', drinksController.getData);

module.exports = routes;