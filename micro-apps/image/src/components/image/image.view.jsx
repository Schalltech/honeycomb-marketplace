/* eslint-disable jsx-a11y/no-noninteractive-element-interactions  */
import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import css from '../../css';

const ImageView = observer((props) => {

  const {
    vm: {
      source,
      Alt,
      Attributes,
      onClick,
    },
  } = props;

  return (
    <>
      <img
        style={{ ...Attributes }}
        src={source}
        alt={Alt}
        onClick={() => { onClick(); }}
      />
      <style>
        {css}
      </style>
    </>
  );
});

ImageView.propTypes = {
  vm: PropTypes.object,
};

ImageView.defaultProps = {
  vm: {},
};

export default ImageView;
