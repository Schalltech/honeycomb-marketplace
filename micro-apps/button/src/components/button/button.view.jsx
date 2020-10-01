import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import css from '../../css';

const ButtonView = observer((props) => {

  const {
    vm: {
      onClick,
      ImgSrc,
      text,
      Attributes,
    },
  } = props;

  const Content = () => {

    if (ImgSrc && text) {
      return (
        <div style={{ display: 'flex' }}>
          <img src={ImgSrc} alt="" style={{ height: '20px', marginRight: '5px' }} />
          <span className="label">{text}</span>
        </div>
      );
    }

    if (text) {
      return (
        <span className="label">{text}</span>
      );
    }

    if (ImgSrc) {
      return (
        <img src={ImgSrc} alt="" style={{ height: '20px' }} />
      );
    }

    return (
      <span className="label">button</span>
    );
  };

  return (
    <>
      <button type="button" className="honeycomb-button" onClick={() => { onClick(); }} style={{ ...Attributes }}>
        {Content()}
      </button>
      <style>
        {css}
      </style>
    </>
  );
});

ButtonView.propTypes = {
  model: PropTypes.object,
};

ButtonView.defaultProps = {
  model: {},
};

export default ButtonView;
