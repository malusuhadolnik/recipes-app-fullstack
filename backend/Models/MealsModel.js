const mongoose = require('../database');

const Meals = new mongoose.Schema({
  idMeal: { type: String },
  strMeal: { type: String },
  strCategory: { type: String },
  strArea: { type: String },
  strInstructions: { type: String },
  strMealThumb: { type: String },
  strTags: { type: String },
  strYoutube: { type: String },
});

const MealsModel = mongoose.model('Meals', Meals);

module.exports = MealsModel;