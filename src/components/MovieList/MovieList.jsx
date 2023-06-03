import React from 'react';
import PropTypes from 'prop-types';
import css from './MovieList.module.css';
import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {movies.map(movie => (
        <li key={movie.id} className={css.item}>
          <Link
            key={movie}
            to={{
              pathname: `/movies/${movie.id}`,
            }}
            state={{ from: location }}
          >
            {movie.title || movie.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};

export default MovieList;
