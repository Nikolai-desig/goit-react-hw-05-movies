import axios from 'axios';

const KEY = 'ffbbb5a70196bf99519e4d9f581ba53d';

const getSearchMovies = async movie => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&api_key=${KEY}`
  );

  return response.data.results;
};

export default getSearchMovies;
