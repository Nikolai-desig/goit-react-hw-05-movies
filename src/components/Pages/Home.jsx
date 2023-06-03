import React from 'react';
import { useState, useEffect } from 'react';
import getTrendingMovies from 'services/apiTranding';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesData = await getTrendingMovies();
      setMovies(moviesData);
    };

    fetchMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {movies ? <MovieList movies={movies} /> : <p>Loading...</p>}
    </>
  );
};

export default Home;
