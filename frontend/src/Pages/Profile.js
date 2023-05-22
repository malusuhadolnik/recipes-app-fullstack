import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import checkIcon from '../images/checkIcon.png';
import yellowHeart from '../images/yellowHeartIcon.png';
import logout from '../images/logoutIcon.png';
import '../styles/Profile.css';

function Profile() {
  const userEmail = localStorage.getItem('user');
  // const userEmail = JSON.parse(localStorage.getItem('user'));
  // const theEmail = Object.values(userEmail);

  const history = useHistory();

  const handleDoneRecipes = () => {
    history.push('/done-recipes');
  };

  const handleFavoriteRecipes = () => {
    history.push('/favorite-recipes');
  };

  const handleLogout = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <div>
      <Header title="Profile" />
      {/* { theEmail !== null
         && <h2 data-testid="profile-email">{ theEmail }</h2>} */}
      <h2 data-testid="profile-email">{ userEmail}</h2>
      <div className="done-recipes">
        <img
          src={ checkIcon }
          alt="Done Recipes"
        />
        <button
          data-testid="profile-done-btn"
          type="button"
          onClick={ handleDoneRecipes }
        >
          Done Recipes
        </button>
      </div>
      <div className="favorite-recipes">
        <img
          src={ yellowHeart }
          alt="Done Recipes"
        />
        <button
          data-testid="profile-favorite-btn"
          type="button"
          onClick={ handleFavoriteRecipes }
        >
          Favorite Recipes
        </button>
      </div>
      <div className="logout">
        <img
          src={ logout }
          alt="Done Recipes"
        />
        <button
          data-testid="profile-logout-btn"
          type="button"
          onClick={ handleLogout }
        >
          Logout
        </button>
      </div>

      <Footer />
    </div>

  );
}

export default Profile;
