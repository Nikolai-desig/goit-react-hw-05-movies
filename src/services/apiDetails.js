import axios from 'axios';

const KEY = 'ffbbb5a70196bf99519e4d9f581ba53d';

const getMovieDetails = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}`
  );

  return response.data;
};

export default getMovieDetails;
