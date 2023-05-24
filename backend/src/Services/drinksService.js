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

const getByCategory = async (category) => {
  const result = await DrinksModel.find({ strCategory: { $regex: new RegExp(`^.*${category}.*$`), $options: "i" } }, { _id: false });

  return result;
};

const getById = async (id) => {
  const result = await DrinksModel.findOne({ idDrink: id }, { _id: false });

  return result;
};

// deve retornar resultado como no endpoint:https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list
const listAllCategories = async () => {
  try {
    const result = await DrinksModel.find({}, { _id: false, strCategory: true });
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

const getDrinkByIngredient = async (q) => {
  try {
    const mongoQuery = [];
    
    for (let i = 1; i <= 20; i++) {
      const query = {
        [`strIngredient${i}`]: { $regex: new RegExp(`^.*${q}.*$`), $options: "i" }
      };
      mongoQuery.push(query); 
    }
    
    const result = await DrinksModel.find({$or:  mongoQuery });
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = {
  getData,
  listAllCategories,
  getDrinkByIngredient,
  getByName,
  getByFirstLetter,
  getRandomRecipe,
  getByCategory,
  getById
};
