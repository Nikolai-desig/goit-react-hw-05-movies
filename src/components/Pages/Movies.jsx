import React, { useState, useEffect } from 'react';
import Search from 'components/Search/Search';
import getSearchMovies from 'services/apiMovies';
import MovieList from 'components/MovieList/MovieList';
import { useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchTerm = searchParams.get('search');
    if (searchTerm) {
      handleSearch(searchTerm);
    }
  }, [location, searchParams]);

  const handleSearch = async searchTerm => {
    const searchedMovies = await getSearchMovies(searchTerm);
    setMovies(searchedMovies);
  };

  const handleFormSubmit = async movie => {
    setSearchParams({ search: movie });
    handleSearch(movie);
  };

  return (
    <div>
      <Search
        onSubmitForm={handleFormSubmit}
        setSearchParams={setSearchParams}
      />
      <MovieList movies={movies} />
    </div>
  );
};

export default Movies;
