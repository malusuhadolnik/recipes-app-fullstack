const { getDrinks } = require("../APIs/drinkApi");
const DrinksModel = require("../Models/DrinksModel")

const getData = async () => {
  let currentDB = await DrinksModel.find({});
  if (currentDB.length === 0) {
    const data = await getDrinks();
    await DrinksModel.insertMany(data);
    return data;
  }
  return currentDB;
};

const getByName = async (name) => {
  if (name) {
    const result = await DrinksModel.find({
      strDrink: { $regex: new RegExp(`^.*${name}.*$`), $options: "i" },
    }, { _id: false });
    return result;
  } else {
    const result = await DrinksModel.find({}, { _id: false })
    return result;
  }
};

const getByFirstLetter = async (letter) => {
  const result = await DrinksModel.find({
    strDrink: { $regex: new RegExp(`^${letter}`), $options: "i" },
  }, { _id: false });
  return result;
};

const getRandomRecipe = async () => {
  const collectionLength = await DrinksModel.countDocuments();
  const randomPosition = Math.floor(Math.random() * (collectionLength - 1));
  const result = await DrinksModel.find({}, { _id: false }).skip(randomPosition).limit(1);
  return result;
};

module.exports = {
  getData,
  getByName,
  getByFirstLetter,
  getRandomRecipe,
}