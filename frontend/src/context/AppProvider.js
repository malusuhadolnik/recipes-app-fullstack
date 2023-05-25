import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import useFetch from '../hooks/useFetch';
// import mealsCategory from '../json/mealsCategories.json';
// import drinksCategory from '../json/drinksCategories.json';

function AppProvider({ children }) {
  const URL_BASE = 'https://recipes-api.up.railway.app/';
  const [user, setUser] = useState({});
  const [isActive, setIsActive] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [recipesInProgress, setRecipesInProgress] = useState({});
  const fetchDrinks = useFetch(`${URL_BASE}/drinks`);
  const fetchDrinksCategory = useFetch(`${URL_BASE}/drinks/categories`);
  const fetchMeals = useFetch(`${URL_BASE}/meals`);
  const fetchFoodsCategorys = useFetch(`${URL_BASE}/meals/categories`);
  const [faveRecipes, setFaveRecipes] = useState([]);
  const [wasShared, setWasShared] = useState(false);
  const [inProgress, setInProgress] = useState({
    meals: [],
    drinks: [],
  });
  const [filteredRecipes, setFilteredRecipes] = useState({ meals: [], drinks: [] });
  const [currentPage, setCurrentPage] = useState('');

  const srchToggle = useCallback(() => {
    setIsActive(isActive === false);
  }, [isActive]);

  const values = useMemo(() => ({
    user,
    setUser,
    isSrchActive: isActive,
    srchToggle,
    fetchDrinks,
    fetchDrinksCategory,
    fetchMeals,
    fetchFoodsCategorys,
    faveRecipes,
    setFaveRecipes,
    wasShared,
    setWasShared,
    recipes,
    setRecipes,
    inProgress,
    setInProgress,
    recipesInProgress,
    setRecipesInProgress,
    filteredRecipes,
    setFilteredRecipes,
    currentPage,
    setCurrentPage,
    URL_BASE,
  }), [
    user,
    isActive,
    srchToggle,
    fetchDrinks,
    fetchDrinksCategory,
    fetchMeals,
    fetchFoodsCategorys,
    faveRecipes,
    setFaveRecipes,
    wasShared,
    setWasShared,
    recipes,
    inProgress,
    recipesInProgress,
    setRecipesInProgress,
    filteredRecipes,
    setFilteredRecipes,
    currentPage,
    setCurrentPage,
  ]);

  return (
    <AppContext.Provider value={ values }>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = ({
  children: PropTypes.node,
}).isRequired;

export default AppProvider;
