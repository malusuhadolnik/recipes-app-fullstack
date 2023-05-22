import React from 'react';
import PropTypes from 'prop-types';
import '../styles/RecipeDetails.css';
import FavoriteAndShare from './FavoriteAndShare';

function CardDetails(props) {
  const {
    selectedCategory,
    history,
  } = props;
  return (
    <div>
      <div className="containerFavoriteAndShare">
        <p data-testid="recipe-category">
          { `${selectedCategory.alcoholic}
            ${selectedCategory.category}`}
        </p>
        <FavoriteAndShare
          selectedCategory={ selectedCategory }
          history={ history }
        />
      </div>
      <div className="containerImgTitle">
        <img
          src={ selectedCategory.thumb }
          alt={ selectedCategory.title }
          className="imgProductDetails"
          data-testid="recipe-photo"
        />
        <div className="containerTitleRecipeDetails">
          <h2
            className="titleCardDetails"
            data-testid="recipe-title"
          >
            {selectedCategory.title}
          </h2>
        </div>
      </div>
    </div>
  );
}

CardDetails.propTypes = {
  selectedCategory: PropTypes.objectOf(String),
}.isRequired;

export default CardDetails;
