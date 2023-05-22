const getData = require("../utils/getData")


const getMeals = async () => {
  const result = await getData('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  return result;
};

module.exports = {
  getMeals,
};
