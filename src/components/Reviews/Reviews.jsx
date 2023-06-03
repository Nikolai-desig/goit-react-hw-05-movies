import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import css from './Reviews.module.css';
import getMovieReviews from 'services/apiReviews';

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      const movieReviews = await getMovieReviews(movieId);
      setReviews(movieReviews);
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <div className={css.reviews}>
      <h3 className={css.reviewTitle}>Reviews</h3>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <p>{review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </div>
  );
};

Reviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default Reviews;
