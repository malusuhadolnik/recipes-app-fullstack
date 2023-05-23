const { getMeals } = require("../APIs/mealApi");
const MealsModel = require("../Models/MealsModel")

const getData = async () => {
  let currentDB = await MealsModel.find({});
  if (currentDB.length === 0) {
    const data = await getMeals();
    await MealsModel.insertMany(data);
    return data;
  }
  return currentDB;
};

const getByCategory = async (category) => {
  const result = await MealsModel.find({ strCategory: { $regex: new RegExp(`^.*${category}.*$`), $options: "i" } });

  return result;
};

module.exports = {
  getData,
  getByCategory,
}