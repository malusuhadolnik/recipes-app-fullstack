import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Header from '../components/Header';
import AppContext from '../context/AppContext';
import '../styles/Meals.css';
import Rectangle from '../images/Rectangle.svg';

function Meals() {
  const {
    fetchFoodsCategorys: { data: { meals: categorysFoods } },
    fetchMeals: { data },
    filteredRecipes,
    setRecipes,
    setCurrentPage,
  } = useContext(AppContext) || [];
  const [selectedFilterCategory, setSelectedFilterCategory] = useState([]);
  const [dataFoods, setDataFoods] = useState([]);
  const filteredCategoryFood = useFetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedFilterCategory[0]}`);

  useEffect(() => {
    // let chaves = Object.keys(filteredRecipes);
    // console.log(Object.keys(filteredRecipes));
    if (selectedFilterCategory.length > 0) {
      setDataFoods(filteredCategoryFood.data);
    } else if (filteredRecipes.meals.length > 0) {
      // console.log(filteredRecipes);
      setDataFoods(filteredRecipes);
    } else {
      setDataFoods(data);
    }
  }, [filteredCategoryFood, data, selectedFilterCategory, filteredRecipes]);
  useEffect(() => {
    setRecipes(data);
  }, [data]);
  useEffect(() => {
    setCurrentPage('meals');
  });

  return (
    <div>
      <Header title="Meals" />
      <nav className="navCategorys">
        {categorysFoods
          && categorysFoods.map(({ strCategory }, index) => {
            const five = 5;
            if (index < five) {
              return (
                <button
                  className={ `${strCategory} categoryButton` }
                  type="button"
                  key={ `button ${index}` }
                  name={ strCategory }
                  data-testid={ `${strCategory}-category-filter` }
                  onClick={ ({ target }) => {
                    if (target.closest('button').name === selectedFilterCategory[0]) {
                      return setSelectedFilterCategory([]);
                    }
                    setSelectedFilterCategory([target.closest('button').name]);
                  } }
                >
                  <img key={ `image ${index}` } src={ Rectangle } alt={ strCategory } />
                </button>
              );
            } return undefined;
          })}
        <button
          className="categoryButton all"
          type="button"
          onClick={ () => setSelectedFilterCategory([]) }
          data-testid="All-category-filter"
        >
          <img src={ Rectangle } alt="todos os pratos" />
        </button>
      </nav>
      <section className="containerCardRecipes">
        {dataFoods.meals
          && dataFoods.meals.map(({ strMeal, strMealThumb, idMeal }, key) => {
            const twelve = 12;
            if (key < twelve) {
              return (
                <section className="cardsLink">
                  <Link
                    key={ `card ${key}` }
                    data-testid={ `${key}-recipe-card` }
                    to={ `/meals/${idMeal}` }
                  >
                    <img
                      className="imgCardRecipe"
                      src={ strMealThumb }
                      data-testid={ `${key}-card-img` }
                      alt={ `receita do prato ${strMeal}` }
                    />
                    <p data-testid={ `${key}-card-name` }>{strMeal}</p>
                  </Link>
                </section>
              );
            }
            return undefined;
          })}
      </section>
    </div>
  );
}

export default Meals;
