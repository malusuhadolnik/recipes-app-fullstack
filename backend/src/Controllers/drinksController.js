const { drinksService } = require("../Services")

const getData = async (_req, res, next) => {
  try {
    const result = await drinksService.getData();

    res.status(201).json({ drinks: result });
  } catch (error) {
    next(error);
  }
};

const getByName = async (req, res, next) => {
  try {
    const { q } = req.query;

    const result = await drinksService.getByName(q);

    res.status(200).json({ drinks: result });
  } catch (error) {
    next(error);
  }
};

const getByFirstLetter = async (req, res, next) => {
  try {
    const { q } = req.query;

    const result = await drinksService.getByFirstLetter(q);

    res.status(200).json({ drinks: result });
  } catch (error) {
    next(error);
  }
};

const getRandomRecipe = async (_req, res, next) => {
  try {
    const result = await drinksService.getRandomRecipe();

    res.status(200).json({ drinks: result });
  } catch (error) {
    next(error);
  }
};

const getByCategory = async (req, res, next) => {
  try {
    const { q } = req.query;

    const result = await drinksService.getByCategory(q);

    res.status(201).json({ drinks: result });
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await drinksService.getById(id);

    res.status(201).json({ drinks: [result] });
  } catch (error) {
    next(error);
  }
};

const listAllCategories = async (_req, res, next) => {
  try {
    const result = await drinksService.listAllCategories();

    res.status(200).json({ drinks: result });
  } catch (error) {
    next(error);
  }
};

const getDrinkByIngredient = async (req, res, next) => {
  try {
    const { q } = req.query;
    const result = await drinksService.getDrinkByIngredient(q);
    res.status(200).json({ drinks: result })

  } catch (error) {
    next(error);
  }
}

module.exports = {
  getData,
  listAllCategories,
  getDrinkByIngredient,
  getByName,
  getByFirstLetter,
  getRandomRecipe,
  getByCategory,
  getById
};
