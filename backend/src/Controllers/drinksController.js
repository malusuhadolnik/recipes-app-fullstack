const { drinksService } = require("../Services")

const getData = async (req, res) => {
  const result = await drinksService.getData();

  res.status(201).json({ drinks: result });
};

const getByName = async (req, res) => {
  const { q } = req.query;
  const result = await drinksService.getByName(q);
  res.status(200).json(result);
}


module.exports = {
  getData,
  getByName,
};
