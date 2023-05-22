import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import Profile from '../Pages/Profile';
import AppProvider from '../context/AppProvider';
import mockUser from './helpers/mockUserEmail';

const userEmailMock = mockUser;

beforeEach(() => {
  window.localStorage.setItem('favoriteRecipes', JSON.stringify(userEmailMock));
});

describe('Testa a página Profile', () => {
  test('se a aplicação é redirecionada para a página de Receitas Feitas ao clicar no botão Done Recipes', () => {
    const { history } = renderWithRouter(
      <AppProvider>
        <Profile />
      </AppProvider>,
    );

    const doneRecipesBtn = screen.getByTestId('profile-done-btn');
    expect(doneRecipesBtn).toBeInTheDocument();

    userEvent.click(doneRecipesBtn);

    const { pathname } = history.location;
    expect(pathname).toBe('/done-recipes');
  });

  test('se a aplicação é redirecionada para a página de Receitas Favoritas ao clicar no botão Favorite Recipes', () => {
    const { history } = renderWithRouter(
      <AppProvider>
        <Profile />
      </AppProvider>,
    );

    const buttons = screen.getAllByRole('button');
    expect(buttons[1]).toBeInTheDocument();
    expect(buttons[1]).toHaveTextContent('Favorite Recipes');

    userEvent.click(buttons[1]);

    const { pathname } = history.location;
    expect(pathname).toBe('/favorite-recipes');
  });

  test('se a aplicação é redirecionada para a página de Login ao clicar no botão Logout', () => {
    const { history } = renderWithRouter(
      <AppProvider>
        <Profile />
      </AppProvider>,
    );

    const logoutBtn = screen.getByTestId('profile-logout-btn');
    expect(logoutBtn).toBeInTheDocument();

    userEvent.click(logoutBtn);

    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  test('se o email do usuário é renderizado na página ', () => {
    renderWithRouter(
      <AppProvider>
        <Profile />
      </AppProvider>,
    );

    const email = screen.getByTestId('profile-email');
    expect(email).toBeInTheDocument();
  });
});
