const { mealsService } = require("../Services")

const getData = async (req, res) => {
  const result = await mealsService.getData();

  res.status(201).json({ meals: result });
};

const getByName = async (req, res) => {
  const { q } = req.query;
  const result = await mealsService.getByName(q);
  res.status(200).json(result);
}

const getByFirstLetter = async (req, res) => {
  const { q } = req.query;
  const result = await mealsService.getByFirstLetter(q);
  res.status(200).json(result);
};

const getRandomRecipe = async (_req, res) => {
  const result = await mealsService.getRandomRecipe();
  res.status(200).json(result);
};

module.exports = {
  getData,
  getByName,
  getByFirstLetter,
  getRandomRecipe,
};
