/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import {
  Image, Transformation,
} from 'cloudinary-react';
import css from '../../css';

const CloudinaryView = observer((props) => {

  console.log('Cloud', props);
  const {
    vm: {
      Attributes,
      options,
      color,
      cord,
      updateColor,
      updateCord,
    },
  } = props;

  const Options = options.map((option, oi) => {

    if (option.internalName === 'Color_524032') {
      return (
        <div key={oi} className="option">
          {option.longLabel}
          <div className="color-option">
            {
              option.choices.map((choice, ci) => (
                <button type="button" className="color-choice" key={ci} onClick={() => { updateColor(choice.shortLabel); }}>
                  <img
                    src={choice.mediaUrl}
                    alt={choice.internalName}
                    style={{
                      height: '120px',
                      width: '120px',
                      marginBottom: '10px',
                      borderRadius: '5px',
                    }}
                  />
                  {choice.shortLabel}
                </button>
              ))
            }
          </div>
        </div>
      );
    }

    if (option.internalName === 'Lift_Blind_Cordless') {
      return (
        <div key={oi} className="option">
          {option.longLabel}
          <div className="color-option">
            {
              option.choices.map((choice, ci) => (
                <button type="button" className="color-choice" key={ci} onClick={() => { updateCord(choice.shortLabel === 'Cord Lift'); }}>
                  <img
                    src={choice.mediaUrl}
                    alt={choice.internalName}
                    style={{
                      height: '120px',
                      width: '120px',
                      marginBottom: '10px',
                      borderRadius: '5px',
                    }}
                  />
                  {choice.shortLabel}
                </button>
              ))
            }
          </div>
        </div>
      );
    }
    return null;
  });

  return (
    <>
      <div className="honeycomb-cloudinary">
        <div className="options">
          {Options}
        </div>
        <div className="visualizer">
          <Image cloudName="dvjkx6emb" publicId={`blinds/${color}.jpg`} style={{ objectFit: 'scale-down' }}>
            {cord
              && <Transformation gravity="north_west" overlay="blinds:blind-cord" crop="scale" />}
          </Image>
        </div>
      </div>
      <style>
        {css}
      </style>
    </>
  );
});

CloudinaryView.propTypes = {
  vm: PropTypes.object,
};

CloudinaryView.defaultProps = {
  vm: {},
};

export default CloudinaryView;
