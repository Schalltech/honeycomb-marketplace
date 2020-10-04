/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';

const RedboxHeaderView = (props) => {

  const {
    search,
    isMobile,
  } = props;

  const onSearchTermChange = ({ target }) => search(target.value);

  if (isMobile) {

    return (
      <div style={{ display: 'flex' }}>
        <div style={{ padding: '10px 10px' }}>
          <img style={{ height: '35px', margin: '10px' }} src="https://microapp.services/cdn/media/5f7a37b77f4aa424c02636f1" alt="redbox logo" />
        </div>
        <div style={{ alignSelf: 'center', display: 'flex', flex: '1 1 auto', justifyContent: 'center', paddingRight: '10px' }}>
          <input onChange={onSearchTermChange} placeholder="Search movie titles..." type="text" style={{ flex: '1 1 auto', margin: '10px 0px 10px 0px', borderRadius: '3px', border: '1px solid #ccc', height: '30px', padding: '0px 10px 0px 10px', outlineWidth: '1px', outlineColor: '#2F1E36' }} />
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', maxWidth: '1040px', width: '100%', alignSelf: 'center' }}>
      <div style={{ display: 'flex', flex: '1 1 100%' }}>
        <img style={{ maxWidth: '300px' }} src="https://microapp.services/cdn/media/5f7a37b77f4aa424c02636f1" alt="redbox logo" />
      </div>
      <div style={{ alignSelf: 'center' }}>
        <input onChange={onSearchTermChange} placeholder="Search movie titles..." type="text" style={{ margin: '10px 0px 10px 0px', borderRadius: '3px', border: '1px solid #ccc', height: '30px', padding: '0px 10px 0px 10px', outlineWidth: '1px', outlineColor: '#2F1E36' }} />
      </div>
      <div style={{ display: 'flex', flex: '1 1 100%' }} />
    </div>
  );
};

RedboxHeaderView.propTypes = {
  search: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default RedboxHeaderView;
