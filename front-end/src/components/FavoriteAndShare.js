import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Share from './Share';
import FavoriteButton from './FavoriteButton';
import AppContext from '../context/AppContext';

import '../styles/RecipeDetails.css';

function FavoriteAndShare(props) {
  const {
    history,
    selectedCategory,
  } = props;

  const dataContext = useContext(AppContext);

  return (
    <div className="favoriteAndShareBtn">
      {history.location.pathname.includes('drink') ? (
        <>
          <div className="shareBtnRecipesDetails">
            <Share type="drink" id={ selectedCategory.id } testid="share-btn" />
          </div>
          <div className="favoriteBtnRecipesDetails">
            <FavoriteButton
              type="drink"
              recipe={ {
                idDrink: selectedCategory.id,
                strDrink: selectedCategory.title,
                strCategory: selectedCategory.category,
                strDrinkThumb: selectedCategory.thumb,
                strAlcoholic: selectedCategory.alcoholic,
                type: 'drink',
              } }
              testid="favorite-btn"
            />
          </div>
        </>
      ) : (
        <>
          <div className="shareBtnRecipesDetails">
            <Share type="meal" id={ selectedCategory.id } testid="share-btn" />
          </div>
          <div className="favoriteBtnRecipesDetails">
            <FavoriteButton
              type="meal"
              recipe={ {
                idMeal: selectedCategory.id,
                strArea: selectedCategory.area,
                strMeal: selectedCategory.title,
                strCategory: selectedCategory.category,
                strMealThumb: selectedCategory.thumb,
                alcoholicOrNot: '',
                type: 'meal',
              } }
              testid="favorite-btn"
            />
          </div>
        </>
      )}

      <span>
        {dataContext.wasShared && <p>Link copied!</p>}
      </span>
    </div>
  );
}

FavoriteAndShare.propTypes = {
  history: PropTypes.shape({}),
}.isRequired;

export default FavoriteAndShare;
