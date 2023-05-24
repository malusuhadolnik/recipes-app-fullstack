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

const getByCategory = async (category) => {
  const result = await MealsModel.find({ strCategory: { $regex: new RegExp(`^.*${category}.*$`), $options: "i" } });

  return result;
};

const getByArea = async (area) => {
  const result = await MealsModel.find({ strArea: { $regex: new RegExp(`^.*${area}.*$`), $options: "i" } }, { _id: false });

  return result;
};

const getRandomRecipe = async () => {
  const collectionLength = await MealsModel.countDocuments();
  const randomPosition = Math.floor(Math.random() * (collectionLength - 1));
  const result = await MealsModel.find({}, { _id: false }).skip(randomPosition).limit(1);

  return result;
};

const getById = async (id) => {
  const result = await MealsModel.findOne({ idMeal: id }, { _id: false });

  return result;
};

// deve retornar resultado como no endpoint:https://www.themealdb.com/api/json/v1/1/list.php?c=list
const listAllCategories = async () => {
  try {
    const result = await MealsModel.find({}, { _id: false, strCategory: true });
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

// deve retornar resultado como no endpoint: https://www.themealdb.com/api/json/v1/1/list.php?a=list
const listAllAreas = async () => {
  try {
    const result = await MealsModel.find({}, { _id: false, strArea: true });
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

const getRecipeByIngredient = async (q) => {
  console.log(q);
  try {
    const regex = new RegExp("\\b" + q + "s?\\b", "i");
    
    const result = await MealsModel.find({ strInstructions: { $regex: regex } });
    
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = {
  getData,
  listAllCategories,
  listAllAreas,
  getRecipeByIngredient,
  getByName,
  getByFirstLetter,
  getRandomRecipe,
  getByCategory,
  getByArea,
  getById
};
