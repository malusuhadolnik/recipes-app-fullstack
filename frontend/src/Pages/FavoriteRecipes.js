// import React, { useEffect, useState } from 'react';
import React, { useEffect, useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Cards from '../components/Cards';
import '../styles/DoneRecipes.css';
import All from '../images/All.png';
import foods from '../images/foods.png';
import drinks from '../images/drinks.png';
import AppContext from '../context/AppContext';

function FavoriteRecipes() {
  const { faveRecipes, setFaveRecipes } = useContext(AppContext);
  const retrieveFaveRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  // console.log(retrieveFaveRecipes);

  const handleFilter = ({ target }) => {
    const chooseFilter = target.closest('button').name;
    // const chooseFilter = target.name;
    // console.log(chooseFilter);

    if (chooseFilter === 'all') {
      setFaveRecipes(retrieveFaveRecipes);
    }
    if (chooseFilter === 'drinks' && retrieveFaveRecipes !== null) {
      setFaveRecipes(retrieveFaveRecipes.filter((recipe) => (
        recipe.type === 'drink'
      )));
    }
    if (chooseFilter === 'meals' && retrieveFaveRecipes !== null) {
      setFaveRecipes(retrieveFaveRecipes.filter((recipe) => (
        recipe.type === 'meal'
      )));
    }
  };
  useEffect(() => {
    setFaveRecipes(retrieveFaveRecipes);
  }, []);

  return (
    <div>
      <Header title="Favorite Recipes" />
      <div className="filters">
        <button
          className="doneFiltersAll"
          // data-testid="filter-by-all-btn"
          type="button"
          name="all"
          onClick={ handleFilter }
        >
          <img
            data-testid="filter-by-all-btn"
            src={ All }
            alt="all"
          />
          {/* All */}
        </button>
        <button
          className="doneFiltersMeals"
          // data-testid="filter-by-meal-btn"
          type="button"
          name="meals"
          onClick={ handleFilter }
        >
          <img
            data-testid="filter-by-meal-btn"
            src={ foods }
            alt="foods"
          />
          {/* Meals */}
        </button>
        <button
          className="doneFiltersDrinks"
          // data-testid="filter-by-drink-btn"
          type="button"
          name="drinks"
          onClick={ handleFilter }
        >
          <img
            data-testid="filter-by-drink-btn"
            src={ drinks }
            alt="drinks"
          />
          {/* Drinks */}
        </button>
      </div>
      <br />
      <div className="favesContainer">
        { faveRecipes !== null
          && faveRecipes.map((recipe, index) => (<Cards
            key={ index }
            image={ recipe.image }
            name={ recipe.name }
            nationality={ recipe.nationality }
            category={ recipe.category }
            type={ recipe.type }
            alcohol={ recipe.alcoholicOrNot }
            index={ index }
            id={ recipe.id }
          />))}
      </div>
      <Footer />
    </div>
  );
}

export default FavoriteRecipes;
