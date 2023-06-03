import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import css from './Cast.module.css';
import getMovieCredits from 'services/apiCredits';

const Cast = ({ movieId }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieCredits = async () => {
      const movieCredits = await getMovieCredits(movieId);
      setCast(movieCredits);
    };

    fetchMovieCredits();
  }, [movieId]);

  return (
    <div className={css.cast}>
      <h3 className={css.castTitle}>Cast</h3>
      {cast.length > 0 ? (
        <ul className={css.list}>
          {cast.map(actor => (
            <li key={actor.id}>
              <div className={css.item}>
                {actor.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                    alt={`${actor.name}`}
                  />
                ) : (
                  <p>No photo</p>
                )}
                <div>
                  <p className={css.name}>Name: {actor.name}</p>
                  <p className={css.character}>Character: {actor.character}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No cast information available</p>
      )}
    </div>
  );
};

Cast.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default Cast;
