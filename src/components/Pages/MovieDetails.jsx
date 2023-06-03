import React, { useEffect, useState } from 'react';
import { useParams, Route, Routes, useLocation } from 'react-router-dom';
import Movie from 'components/Movie/Movie';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import getMovieDetails from 'services/apiDetails';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const fetchMovieData = async () => {
      const movieData = await getMovieDetails(movieId);
      setMovieData(movieData);
    };

    fetchMovieData();
  }, [movieId]);

  return (
    <>
      <Movie dataMovie={movieData} backLinkHref={backLinkHref} />
      <Routes>
        <Route path="cast" element={<Cast movieId={movieId} />} />
        <Route path="reviews" element={<Reviews movieId={movieId} />} />
      </Routes>
    </>
  );
};

export default MovieDetails;
