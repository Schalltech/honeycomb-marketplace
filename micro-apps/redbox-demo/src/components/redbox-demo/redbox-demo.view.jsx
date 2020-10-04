import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import RedboxHeaderView from '../redbox-header/redbox-header.view';
import RedboxMovieDetailsView from '../redbox-movie-details/redbox-movie-details.view';
import RedboxMovieListView from '../redbox-movie-list/redbox-movie-list.view';
import css from '../../css';

const RedboxDemoView = observer((props) => {

  const {
    vm: {
      movies,
      selectedMovie,
      search,
      getMovie,
      Attributes,
    },
    isMobile,
  } = props;

  return (
    <>
      <div className="honeycomb-redbox-demo" style={Attributes}>
        <RedboxHeaderView search={search} isMobile={isMobile} />
        <div style={{
          backgroundColor: '#2F1E36', color: '#FFFFFF', display: 'flex', flexDirection: 'column', flex: '1 1 100%', padding: '20px',
        }}
        >
          <div style={{ maxWidth: '1040px', width: '100%', alignSelf: 'center' }}>
            <RedboxMovieDetailsView selectedMovie={selectedMovie} isMobile={isMobile} />
          </div>
          <div style={{
            marginTop: '40px', maxWidth: '1040px', width: '100%', alignSelf: 'center',
          }}
          >
            <RedboxMovieListView movies={movies} getMovie={getMovie} isMobile={isMobile} />
          </div>
        </div>
      </div>
      <style>
        {css}
      </style>
    </>
  );
});

RedboxDemoView.propTypes = {
  vm: PropTypes.object,
};

RedboxDemoView.defaultProps = {
  vm: {},
};

export default RedboxDemoView;
