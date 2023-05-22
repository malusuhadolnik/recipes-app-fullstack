import React from 'react';
import PropTypes from 'prop-types';
import '../styles/RecipeDetails.css';

function List(props) {
  const {
    selectedCategory,
    history,
  } = props;
  return (
    <div className="containerList">
      <ul className="listIngredientsDetails">
        {selectedCategory.ingredients
            && selectedCategory.ingredients.map((ingredient, index) => {
              if (ingredient !== null && ingredient.length > 0) {
                return (
                  <li
                    data-testid={ `${index}-ingredient-name-and-measure` }
                    key={ index }
                  >
                    {ingredient}
                    {' of '}
                    {selectedCategory.measures[index]}
                  </li>
                );
              }
              return '';
            })}
      </ul>
      <div className="instructionsContainer">
        <p
          className="instructionsRecipeDetails"
          data-testid="instructions"
        >
          {selectedCategory.instructions}
        </p>
      </div>
      {
        history.location.pathname.includes('meal') && (
          <iframe
            height="200"
            width="300"
            title={ `Video de instrução para o prato ${selectedCategory.title}` }
            src={ selectedCategory.linkYtb }
            data-testid="video"
          />
        )
      }
    </div>
  );
}

List.propTypes = {
  selectedCategory: PropTypes.objectOf(Object),
}.isRequired;

export default List;
