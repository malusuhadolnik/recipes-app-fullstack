const { mealsService } = require("../Services")

const getData = async (req, res) => {
  const result = await mealsService.getData();

  res.status(201).json({ meals: result });
};

const getByCategory = async (req, res) => {
  const { q } = req.query;

  const result = await mealsService.getByCategory(q);

  res.status(201).json({ meals: result });
};

module.exports = {
  getData,
  getByCategory,
};
