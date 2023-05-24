const { mealsService } = require("../Services")

const getData = async (_req, res, next) => {
  try {
    const result = await mealsService.getData();

    res.status(201).json({ meals: result });
  } catch (error) {
    next(error);
  }
};

const getByName = async (req, res, next) => {
  try {
    const { q } = req.query;

    const result = await mealsService.getByName(q);

    res.status(200).json({ meals: result });
  } catch (error) {
    next(error)
  }
}

const getByFirstLetter = async (req, res, next) => {
  try {
    const { q } = req.query;

    const result = await mealsService.getByFirstLetter(q);

    res.status(200).json({ meals: result });
  } catch (error) {
    next(error);
  }
};

const getRandomRecipe = async (_req, res, next) => {
  try {
    const result = await mealsService.getRandomRecipe();

    res.status(200).json({ meals: result });
  } catch (error) {
    next(error);
  }
};

const getByCategory = async (req, res, next) => {
  try {
    const { q } = req.query;

    const result = await mealsService.getByCategory(q);

    res.status(201).json({ meals: result });
  } catch (error) {
    next(error);
  }
};

const getByArea = async (req, res) => {
  try {
    const { q } = req.query;

    const result = await mealsService.getByArea(q);

    res.status(201).json({ meals: result });
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await mealsService.getById(id);

    res.status(201).json({ meals: [result] });
  } catch (error) {
    next(error);
  }
};

const listAllCategories = async (_req, res) => {
  try {
    const result = await mealsService.listAllCategories();
    
    res.status(200).json({ meals: result });
  } catch(error) {
     next(error);
  }
};

const listAllAreas = async (_req, res) => {
  try {
    const result = await mealsService.listAllAreas();
    
    res.status(200).json({ meals: result });
  } catch(error) {
     next(error);
  }
};

const getRecipeByIngredient = async (req, res) => {
  try {
    const { q } = req.query;
    const result = await mealsService.getRecipeByIngredient(q);
    res.status(200).json({ meals: result })
  } catch(error) {
     next(error);
  }
}

module.exports = {
  getData,
  listAllCategories,
  listAllAreas,
  getRecipeByIngredient,
  getByName,
  getByFirstLetter,
  getRandomRecipe,
  getByCategory,
  getByArea,
  getById
};
