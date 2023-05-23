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
    // return result.map(doc => doc.strCategory);
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = {
  getData,
  listAllCategories,
}