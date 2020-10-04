import { action, decorate, observable } from 'mobx';
import RedboxDemoModel from './redbox-demo.model';
import ConfigurationService from '../../api/configuration.service';

/**
 * This model manages the data presented to the view. All data manipulation should be
 * performed within this model. Any properties defined in this model will not appear in
 * the plugins configuration editor.
 */
class RedboxDemoViewModel extends RedboxDemoModel {

  constructor(micro) {
    super(micro);

    this.movieCount = 0;
    this.movies = [];
    this.selectedMovie = {};
    this.search = this.search.bind(this);
    this.getMovie = this.getMovie.bind(this);
    this.initialize = this.initialize.bind(this);
  }

  movies;

  movieCount;

  selectedMovie;

  search(filter) {
    return ConfigurationService.search(filter).then((res) => {
      const response = res.data;
      this.movies = response.Search;
      this.movieCount = response.totalResults;

      if (this.movieCount > 0) {
        this.getMovie(this.movies[0].imdbID);
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  getMovie(imdbID) {
    ConfigurationService.getMovie(imdbID).then((res) => {
      this.selectedMovie = res.data;
    }).catch((err) => {
      console.log(err);
    });
  }

  initialize() {

    // Show Kate Beckingsale because shes hawt.
    this.search('Underworld').then(() => {
      this.getMovie('tt3717252');
    });
  }
}

decorate(RedboxDemoViewModel, {
  movies: observable,
  movieCount: observable,
  selectedMovie: observable,
  search: action,
  getMovie: action,
  initialize: action,
});

export default RedboxDemoViewModel;
