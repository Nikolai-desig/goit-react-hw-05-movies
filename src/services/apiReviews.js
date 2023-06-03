import axios from 'axios';

const KEY = 'ffbbb5a70196bf99519e4d9f581ba53d';

const getMovieReviews = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${KEY}`
  );

  return response.data.results;
};

export default getMovieReviews;
