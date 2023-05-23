const { Router } = require('express');
const { drinksController } = require('../Controllers');

const routes = Router();

routes.get('/', drinksController.getData);

routes.get('/name', drinksController.getByName);

routes.get('/letter', drinksController.getByFirstLetter);;

module.exports = routes;