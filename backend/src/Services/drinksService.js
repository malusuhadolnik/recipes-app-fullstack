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
      strDrink: { $regex: new RegExp(name, "i") },
    }, {
      strDrink: true,
      _id: false,
    })
    return result;
  } else {
    const result = await DrinksModel.find({}, {
      strDrink: true,
      _id: false,
    })
    return result;
  }
};

module.exports = {
  getData,
  getByName,
}