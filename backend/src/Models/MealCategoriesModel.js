const mongoose = require('../database');

const MealCategories = new mongoose.Schema({
  idCategory: { type: String },
  strCategory: { type: String },
  strCategoryThumb: { type: String },
  strCategoryDescription: { type: String },
});

const MealCategoriesModel = mongoose.model('MealCategories', MealCategories);

module.exports = MealCategoriesModel;