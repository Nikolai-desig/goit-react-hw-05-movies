import { NavLink } from 'react-router-dom';
import React from 'react';
import css from './Header.module.css';

const Header = () => {
  return (
    <nav className={css.navigation}>
      <NavLink to="/" className={css.link}>
        Home
      </NavLink>
      <NavLink to="/movies" className={css.link}>
        Movies
      </NavLink>
    </nav>
  );
};

export default Header;
