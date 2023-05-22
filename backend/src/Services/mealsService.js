const { getMeals } = require("../APIs/mealApi");
const MealsModel = require("../Models/MealsModel")

const getData = async () => {
  try {
    const currentDB = await MealsModel.find({});
    return currentDB;
  } catch (error) {
    const mealsData = await getMeals();
    // await MealsModel.insertMany(mealsData);
    return mealsData;
  }
};

module.exports = {
  getData,
}