import React, { useContext, useState } from 'react';
import '../styles/SearchBar.css';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';

function SearchBar() {
  const [searchCat, setSearchCat] = useState('');
  const [inputValue, setInputValue] = useState('');
  const { setFilteredRecipes, currentPage, URL_BASE } = useContext(AppContext);
  const ing = 'ingredient';
  const nam = 'name';
  const fst = 'first-letter';
  const history = useHistory();

  const filteredFetch = async (url, type) => {
    const response = await fetch(url);
    const api = await response.json();
    const id = type === 'meals' ? 'idMeal' : 'idDrink';
    let objState = {
      meals: [],
      drinks: [],
    };
    objState[type] = api[type];
    if (api[type] === null) {
      const phrase = 'Sorry, ';
      global.alert(`${phrase}we haven't found any recipes for these filters.`);
      objState = {
        meals: [],
        drinks: [],
      };
    } else if (api[type].length === 1) {
      history.push(`/${type}/${api[type][0][id]}`);
    }
    return objState;
  };

  const mealSearch = async () => {
    if (searchCat === ing) {
      const filterByIngredient = `${URL_BASE}/meals/ingredient?q=${inputValue}`;
      const resFetch = await filteredFetch(filterByIngredient, 'meals');
      setFilteredRecipes(resFetch);
    } else if (searchCat === nam) {
      const filterByName = `${URL_BASE}/meals/name?q=${inputValue}`;
      const resFetch = await filteredFetch(filterByName, 'meals');
      setFilteredRecipes(resFetch);
    } else {
      if (inputValue.length > 1) {
        global.alert('Your search must have only 1 (one) character');
        return;
      }
      const filterByFirstLetter = `${URL_BASE}/meals/letter?q=${inputValue}`;
      const resFetch = await filteredFetch(filterByFirstLetter, 'meals');
      setFilteredRecipes(resFetch);
    }
  };

  const drinkSearch = async () => {
    if (searchCat === ing) {
      const filterByIngredient = `${URL_BASE}/drinks/ingredient?q=${inputValue}`;
      const resFetch = await filteredFetch(filterByIngredient, 'drinks');
      setFilteredRecipes(resFetch);
    } else if (searchCat === nam) {
      const filterByName = `${URL_BASE}/drinks/name?q=${inputValue}`;
      const resFetch = await filteredFetch(filterByName, 'drinks');
      setFilteredRecipes(resFetch);
    } else {
      if (inputValue.length > 1) {
        global.alert('Your search must have only 1 (one) character');
        return;
      }
      const filterByFirstLetter = `${URL_BASE}/drinks/letter?q=${inputValue}`;
      const resFetch = await filteredFetch(filterByFirstLetter, 'drinks');
      setFilteredRecipes(resFetch);
    }
  };

  const requestSearch = async () => {
    if (currentPage === 'meals') {
      mealSearch();
    } else {
      drinkSearch();
    }
  };

  const handleChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div className="searchDiv">
      <input
        type="text"
        data-testid="search-input"
        value={inputValue}
        onChange={handleChange}
        className="searchInput"
      />
      <div className="searchOptionsDiv">
        <label htmlFor="ingredient">
          <input
            type="radio"
            value="ingredient"
            id="ingredient"
            name="teste"
            onChange={() => setSearchCat(ing)}
            data-testid="ingredient-search-radio"
          />
          <span>Ingredient</span>
        </label>
        <label htmlFor="name">
          <input
            type="radio"
            value="name"
            id="name"
            name="teste"
            onChange={() => setSearchCat(nam)}
            data-testid="name-search-radio"
          />
          <span>Name</span>
        </label>
        <label htmlFor="first-letter">
          <input
            type="radio"
            value="first-letter"
            id="first-letter"
            name="teste"
            onChange={() => setSearchCat(fst)}
            data-testid="first-letter-search-radio"
          />
          <span>First Letter</span>
        </label>
        <button
          type="button"
          data-testid="exec-search-btn"
          onClick={requestSearch}
        >
          <span>Search</span>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
