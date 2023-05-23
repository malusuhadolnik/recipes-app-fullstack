const getData = require("../utils/getData")


const getMeals = async () => {
  const result = await getData('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  return result.meals;
};

const getCategories = async () => {
  const result = await getData('https://www.themealdb.com/api/json/v1/1/categories.php');
  console.log(result);
  return result.categories;
}

module.exports = {
  getMeals,
  getCategories,
};
