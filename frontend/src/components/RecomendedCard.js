import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function RecomendedCard(props) {
  const {
    recomended,
    history,
  } = props;
  return (
    <div className="containerRecomended">
      {history.location.pathname.includes('meal')
            && recomended.length > 0
            && recomended[0].strDrinkThumb
            && recomended.map((element, index) => (
              <Link
                to={ `/drinks/${element.idDrink}` }
                key={ index }
                data-testid={ `${index}-recommendation-card` }
              >
                <img
                  src={ element.strDrinkThumb }
                  alt={ element.strDrink }
                  className="imgRecomended"
                />
                <p data-testid={ `${index}-recommendation-title` }>
                  {element.strDrink}
                </p>
              </Link>
            ))}
      {history.location.pathname.includes('drink')
          && recomended.length > 0
          && recomended[0].strMealThumb
          && recomended.map((element, index) => (
            <Link
              key={ index }
              data-testid={ `${index}-recommendation-card` }
              to={ `/meals/${element.idMeal}` }
            >
              <img
                src={ element.strMealThumb }
                alt={ element.strMeal }
                className="imgRecomended"
              />
              <p data-testid={ `${index}-recommendation-title` }>
                {element.strMeal}
              </p>
            </Link>
          ))}
    </div>
  );
}

RecomendedCard.propTypes = {
  history: PropTypes.objectOf(Object),
  recomended: PropTypes.arrayOf(Object),
}.isRequired;

export default RecomendedCard;
