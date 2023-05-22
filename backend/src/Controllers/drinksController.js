const { drinksService } = require("../Services")

const getData = async (req, res) => {
  const result = await drinksService.getData();

  res.status(201).json({ drinks: result });
};

module.exports = {
  getData,
};
