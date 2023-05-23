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

const getByCategory = async (category) => {
  const result = await DrinksModel.find({ strCategory: { $regex: new RegExp(`^.*${category}.*$`), $options: "i" } });

  return result;
};

const getById = async (id) => {
  const result = await DrinksModel.findOne({ idDrink: id });

  return result;
};

module.exports = {
  getData,
  getByCategory,
  getById
}