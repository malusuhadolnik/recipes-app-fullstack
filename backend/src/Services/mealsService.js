const { getMeals } = require("../APIs/mealApi");
const MealsModel = require("../Models/MealsModel")

const getData = async () => {
  try {
    let currentDB = await MealsModel.find({});
    if (currentDB.length === 0) {
      const data = await getMeals();
      await MealsModel.insertMany(data);
      return data;
    }
    return currentDB;
  } catch (error) {
    console.log(error.message)
  }
};

const getByName = async (name) => {
  try {
    if (name) {
      const result = await MealsModel.find({
        strMeal: { $regex: new RegExp(name, "i") },
      }, {
        _id: false,
      });
      return result;
    } else {
      const result = await MealsModel.find({}, {
        _id: false,
      });
      return result;
    };
  } catch (error) {
    console.log(error.message)
  }
};

const getByFirstLetter = async (letter) => {
  try {
    const result = await MealsModel.find({
      strMeal: { $regex: new RegExp(`^${letter}`), $options: "i" },
    }, { strMeal: true });
    return result;
  } catch (error) {
    console.log(error.message)
  }
};

module.exports = {
  getData,
  getByName,
  getByFirstLetter,
};
