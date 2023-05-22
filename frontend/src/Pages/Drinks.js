import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import useFetch from '../hooks/useFetch';
import Header from '../components/Header';

import '../styles/Drinks.css';
import Rectangle from '../images/Rectangle.svg';

function Drinks() {
  const {
    fetchDrinksCategory: { data: { drinks: categorysDrinks } },
    fetchDrinks: { data },
    filteredRecipes,
    setCurrentPage,
  } = useContext(AppContext) || [];
  const [selectedFilterCategory, setSelectedFilterCategory] = useState([]);
  const [dataDrinks, setDataDrinks] = useState([]);
  const filteredByCategory = useFetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${selectedFilterCategory[0]}`);
  useEffect(() => {
    if (selectedFilterCategory.length > 0) {
      setDataDrinks(filteredByCategory.data);
    } else if (filteredRecipes.drinks.length > 0) {
      setDataDrinks(filteredRecipes);
    } else {
      setDataDrinks(data);
    }
  }, [data, selectedFilterCategory, filteredByCategory, filteredRecipes]);
  useEffect(() => {
    setCurrentPage('drinks');
  });

  return (
    <div>
      <Header title="Drinks" />
      <nav className="containerCardRecipesDrinks">
        {categorysDrinks
          && categorysDrinks.map(({ strCategory }, index) => {
            const five = 5;
            if (index < five) {
              return (
                <button
                  key={ index }
                  type="button"
                  name={ strCategory }
                  className={ `button${index} categoryButtonsDrink` }
                  data-testid={ `${strCategory}-category-filter` }
                  onClick={ ({ target }) => {
                    if (target.closest('button').name === selectedFilterCategory[0]) {
                      return setSelectedFilterCategory([]);
                    }
                    setSelectedFilterCategory([target.closest('button').name]);
                  } }
                >
                  <img src={ Rectangle } alt={ strCategory } />
                  {/* {strCategory} */}
                </button>
              );
            }
            return undefined;
          })}
        <button
          type="button"
          onClick={ () => setSelectedFilterCategory([]) }
          className="categoryButtonsDrink allDrinksRecipes"
          data-testid="All-category-filter"
          // className="allDrinksRecipes"
        >
          <img src={ Rectangle } alt="todos os drinks" />
        </button>
      </nav>
      <section className="navCategorysDrinks">
        {dataDrinks.drinks
          && dataDrinks.drinks.map((drink, key) => {
            const link = `/drinks/${drink.idDrink}`;
            const twelve = 12;
            if (key < twelve) {
              return (
                <section className="cardsLinkDrinks">
                  <Link
                    key={ key }
                    data-testid={ `${key}-recipe-card` }
                    to={ link }
                  >
                    <p data-testid={ `${key}-card-name` }>{drink.strDrink}</p>
                    <img
                      className="imgCardRecipe"
                      src={ drink.strDrinkThumb }
                      alt={ `receita do drink ${drink.strDrink}` }
                      data-testid={ `${key}-card-img` }
                    />
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

export default Drinks;
