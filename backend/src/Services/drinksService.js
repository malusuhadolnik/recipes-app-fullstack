const { getDrinks } = require("../APIs/drinkApi");
const DrinksModel = require("../Models/DrinksModel")

const getData = async () => {
    let currentDB = await DrinksModel.find({});
    if(currentDB.length === 0) {
      const data = await getDrinks();
      await DrinksModel.insertMany(data);
      return data;
    }
    return currentDB;
};

// deve retornar resultado como no endpoint:https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list
const listAllCategories = async () => {
  try {
    const result = await DrinksModel.find({}, { _id: false, strCategory: true });
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

const getDrinkByIngredient = async (q) => {
  console.log(q);
  try {
    const regex = new RegExp("\\b" + q + "s?\\b", "i");
    
    const result = await DrinksModel.find({ strInstructions: { $regex: regex } });
    
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = {
  getData,
  listAllCategories,
  getDrinkByIngredient,
}