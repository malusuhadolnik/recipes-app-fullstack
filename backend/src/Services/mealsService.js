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

const getByName = async (name) => {
  if (name) {
    const result = await MealsModel.find({
      strMeal: { $regex: new RegExp(name, "i") },
    }, {
      strMeal: true,
      _id: false,
    })
    return result;
  } else {
    const result = await MealsModel.find({}, {
      strMeal: true,
      _id: false,
    })
    return result;
  }
};

module.exports = {
  getData,
  getByName,
};
