const { Router } = require('express');
const { mealsController } = require('../Controllers');

const routes = Router();

routes.get('/', mealsController.getData);

//rota para a lista de categorias
routes.get('/categories', mealsController.listAllCategories);

//rota para categorias com informação completa.
routes.get('/categoriesinfo', mealsController.getCategories);

routes.get('/areas', mealsController.listAllAreas);

module.exports = routes;