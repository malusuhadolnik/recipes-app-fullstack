const { getMeals } = require("../APIs/mealApi");
const MealsModel = require("../Models/MealsModel")

const getData = async () => {
  let currentDB = await MealsModel.find({});
  if (currentDB.length === 0) {
    const data = await getMeals();
    await MealsModel.insertMany(data);
    return data;
  }
  return currentDB
};

const getByName = async (name) => {
  if (name) {
    const result = await MealsModel.find({
      strMeal: { $regex: new RegExp(`^.*${name}.*$`), $options: "i" },
    }, { _id: false });
    return result;
  } else {
    const result = await MealsModel.find({}, { _id: false });

    return result;
  }
};

const getByFirstLetter = async (letter) => {
  const result = await MealsModel.find({
    strMeal: { $regex: new RegExp(`^${letter}`), $options: "i" },
  }, { _id: false, });

  return result;
};

const getRandomRecipe = async () => {
  const collectionLength = await MealsModel.countDocuments();
  const randomPosition = Math.floor(Math.random() * (collectionLength - 1));
  const result = await MealsModel.find({}, { _id: false }).skip(randomPosition).limit(1);

  return result;
};

module.exports = {
  getData,
  getByName,
  getByFirstLetter,
  getRandomRecipe,
};
