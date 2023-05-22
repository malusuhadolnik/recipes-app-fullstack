const { mealsService } = require("../Services")

const getData = async (req, res) => {
  // const result = await mealsService.getData();

  res.status(201).json({ meals: "ok" });
};

module.exports = {
  getData,
};
