import React, { useContext } from 'react';
import '../styles/Header.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import logoIcon from '../images/logoApp.png';
import titleMeals from '../images/mealsTitleIcon.png';
import titleDrinks from '../images/drinksTitleIcon.png';
import titleIcon from '../images/titleApp.png';
import AppContext from '../context/AppContext';
import SearchBar from './SearchBar';

function Header({ title }) {
  const { isSrchActive, srchToggle } = useContext(AppContext);
  return (
    <div className="headerDiv">
      <nav className="headerNav">
        <Link to="/meals">
          <img className="logoIcon" src={ logoIcon } alt="logo do app" />
          <img className="titleIcon" src={ titleIcon } alt="titulo do app" />
        </Link>
        <Link className="profileIcon" to="/profile">
          <img
            alt="profileIcon"
            data-testid="profile-top-btn"
            src={ profileIcon }
            style={ { height: '27px', width: '27px' } }
          />
        </Link>
        {
          (title === 'Meals' || title === 'Drinks')
          && (
            <button
              type="button"
              onClick={ srchToggle }
            >
              <img
                alt="searchIcon"
                data-testid="search-top-btn"
                src={ searchIcon }
                style={ { height: '27px', width: '27px' } }
              />
            </button>
          )
        }
      </nav>
      <div className="pageTitle">
        { title === 'Meals' && <img src={ titleMeals } alt="titulo meals" />}
        { title === 'Drinks' && <img src={ titleDrinks } alt="titulo drinks" />}
        { title && <h2 data-testid="page-title">{ title }</h2> }
      </div>
      { isSrchActive && <SearchBar />}
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
