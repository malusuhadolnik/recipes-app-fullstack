const getData = require("../utils/getData")


const getDrinks = async () => {
  const result = await getData('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  return result.drinks;
};

module.exports = {
  getDrinks,
};
