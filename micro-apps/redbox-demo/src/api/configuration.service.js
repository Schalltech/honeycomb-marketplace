import axios from 'axios';

class ConfigurationService {

  static search(filter) {
    return axios.get(`https://www.omdbapi.com/?apikey=81fbe921&type=movie&s=${filter}`);
  }

  static getMovie(imdbID) {
    return axios.get(`https://www.omdbapi.com/?apikey=81fbe921&type=movie&i=${imdbID}`);
  }
}

export default ConfigurationService;
