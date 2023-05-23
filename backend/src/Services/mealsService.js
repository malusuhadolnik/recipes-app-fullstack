const { getMeals } = require("../APIs/mealApi");
const MealsModel = require("../Models/MealsModel")

const getData = async () => {
    let currentDB = await MealsModel.find({});
    if(currentDB.length === 0) {
      const data = await getMeals();
      await MealsModel.insertMany(data);
      return data;
    }
    return currentDB;
};

// deve retornar resultado como no endpoint:https://www.themealdb.com/api/json/v1/1/list.php?c=list
const listAllCategories = async () => {
  try {
    const result = await MealsModel.find({}, { _id: false, strCategory: true });
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

// deve retornar resultado como no endpoint: https://www.themealdb.com/api/json/v1/1/list.php?a=list
const listAllAreas = async () => {
  try {
    const result = await MealsModel.find({}, { _id: false, strArea: true });
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

const getRecipeByIngredient = async (q) => {
  console.log(q);
  try {
    const regex = new RegExp("\\b" + q + "s?\\b", "i");
    
    const result = await MealsModel.find({ strInstructions: { $regex: regex } });
    
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = {
  getData,
  listAllCategories,
  listAllAreas,
  getRecipeByIngredient,
}