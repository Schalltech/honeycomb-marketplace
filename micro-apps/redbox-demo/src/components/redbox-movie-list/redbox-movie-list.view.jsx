/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';

const RedboxMovieListView = (props) => {

  const {
    getMovie,
    movies,
    isMobile,
  } = props;

  const selectionChanged = (movie) => {

    getMovie(movie.imdbID);
  };

  const renderMoviePods = () => {

    let pods = null;

    if (movies !== undefined) {

      pods = movies.map((movie, i) => (
        <button type="button" key={i} style={{ display: 'flex', flexDirection: 'column', height: isMobile ? '215px' : '360px', width: isMobile ? '145px' : '250px', backgroundColor: '#fff', margin: '5px', padding: '0px', cursor: 'pointer', border: '1px solid #ccc', borderRadius: '5px', overflow: 'hidden', justifyContent: 'center' }} onClick={() => selectionChanged(movie)}>
          <img src={movie.Poster} alt={movie.Title} style={{ width: 'inherit', display: movie.Poster === 'N/A' ? 'none' : 'block' }} />
          <span style={{ display: movie.Poster === 'N/A' ? 'block' : 'none', width: isMobile ? '144px' : '175px' }}>{ movie.Title }</span>
        </button>
      ));
    }

    return pods;
  };

  return (

    <div style={{ display: 'flex', flexDirection: 'column' }}>

      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '1040px', alignSelf: 'stretch', flex: '1 1 100%', width: 'auto' }}>

        <span style={{ fontSize: '20px', marginBottom: '10px', borderBottom: '1px solid #fff', paddingBottom: '5px' }}>
          <b>Most Popular DVD & Blu-ray</b>
        </span>

        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', height: '100%', overflow: 'auto', justifyContent: isMobile ? 'space-between' : 'start' }}>
          {renderMoviePods()}
        </div>
      </div>
    </div>
  );
};

RedboxMovieListView.propTypes = {
  movies: PropTypes.array,
  getMovie: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

RedboxMovieListView.defaultProps = {
  movies: [],
};

export default RedboxMovieListView;
