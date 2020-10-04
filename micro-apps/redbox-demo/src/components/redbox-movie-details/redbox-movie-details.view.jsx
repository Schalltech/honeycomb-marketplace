/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';

const RedboxMovieDetailsView = (props) => {

  const {
    selectedMovie,
    isMobile,
  } = props;

  const styles = {
    body: () => ({ backgroundColor: '#2F1E36', color: '#ffffff', fontFamily: 'helvetica-neue, "Helvetica Neue", Helvetica, Arial, sans-serif' }),
    labelText: () => ({ color: '#ccc', fontSize: '14px' }),
  };

  const info = `${selectedMovie.Rated} | ${selectedMovie.Year} | ${selectedMovie.Runtime}`;

  return (
    <div style={styles.body()}>
      <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', height: '100%', alignSelf: 'stretch' }}>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div style={{ display: isMobile ? 'flex' : 'none', flexDirection: 'row', marginBottom: '10px' }}>
            <span style={{ fontSize: '23px', marginRight: '5px' }}>
              <b>{selectedMovie.Title}</b>
            </span>
          </div>
          <img src={selectedMovie.Poster} alt={selectedMovie.Title} style={{ marginBottom: '10px', border: '1px solid #ccc', borderRadius: '10px' }} />
          <div style={{ display: isMobile ? 'flex' : 'none', flexDirection: 'row', justifyContent: 'space-between', fontSize: '14px' }}>
            <span style={{ marginRight: '20px' }}>
              { info }
            </span>
            <span style={{ alignSelf: 'center' }}>
              Rated
              {' '}
              {selectedMovie.imdbRating}
              /10
            </span>
          </div>
          <span style={{ display: isMobile ? 'none' : 'block', alignSelf: 'center' }}>
            Rated
            {' '}
            {selectedMovie.imdbRating}
            /10
          </span>
        </div>
        <div style={{ marginLeft: isMobile ? '0px' : '30px', display: 'flex', flexDirection: 'column' }}>
          <span style={{ display: isMobile ? 'none' : 'block', fontSize: '30px', marginRight: '5px' }}>
            <b>{selectedMovie.Title}</b>
          </span>
          <div>
            <span style={{ display: isMobile ? 'none' : 'block', marginRight: '20px' }}>
              {selectedMovie.Rated}
              {' '}
              |
              {' '}
              {selectedMovie.Year}
              {' '}
              |
              {' '}
              {selectedMovie.Runtime}
            </span>
          </div>
          <span style={{ marginTop: '20px' }}>
            <b>Summary</b>
          </span>
          <span style={styles.labelText()}>
            {selectedMovie.Plot}
          </span>
          <span style={{ marginTop: '20px' }}>
            <b>Genre</b>
          </span>
          <span style={styles.labelText()}>
            {selectedMovie.Genre}
          </span>
          <span style={{ marginTop: '20px' }}>
            <b>Actors</b>
          </span>
          <span style={styles.labelText()}>
            {selectedMovie.Actors}
          </span>
          <span style={{ marginTop: '20px' }}>
            <b>Directors</b>
          </span>
          <span style={styles.labelText()}>
            {selectedMovie.Director}
          </span>
        </div>
      </div>
    </div>
  );
};

RedboxMovieDetailsView.propTypes = {
  selectedMovie: PropTypes.object,
  isMobile: PropTypes.bool.isRequired,
};

RedboxMovieDetailsView.defaultProps = {
  selectedMovie: {},
};

export default RedboxMovieDetailsView;
