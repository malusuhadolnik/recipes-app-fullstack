const { mealsService } = require("../Services")

const getData = async (req, res) => {
  const result = await mealsService.getData();

  res.status(201).json({ meals: result });
};

const listAllCategories = async (_req, res) => {
  const result = await mealsService.listAllCategories();
  res.status(200).json({ meals: result });
}

const listAllAreas = async (_req, res) => {
  const result = await mealsService.listAllAreas();
  res.status(200).json({ meals: result });
}

module.exports = {
  getData,
  listAllCategories,
  listAllAreas,
};
