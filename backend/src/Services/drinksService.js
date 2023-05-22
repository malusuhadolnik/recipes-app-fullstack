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

module.exports = {
  getData,
}