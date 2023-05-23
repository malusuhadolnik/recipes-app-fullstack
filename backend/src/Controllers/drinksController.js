const { drinksService } = require("../Services")

const getData = async (req, res) => {
  const result = await drinksService.getData();

  res.status(201).json({ drinks: result });
};

const getByCategory = async (req, res) => {
  const { q } = req.query;

  const result = await drinksService.getByCategory(q);

  res.status(201).json({ drinks: result });
};

const getById = async (req, res) => {
  const { id } = req.params;

  const result = await drinksService.getById(id);

  res.status(201).json({ drinks: [result] });
};

module.exports = {
  getData,
  getByCategory,
  getById
};
