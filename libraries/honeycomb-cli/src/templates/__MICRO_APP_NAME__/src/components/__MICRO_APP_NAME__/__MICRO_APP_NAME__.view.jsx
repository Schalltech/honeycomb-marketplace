import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import css from '../../css';

const __MicroAppName__View = observer((props) => {

  const {
    vm: {
      greeting,
      Attributes,
    },
  } = props;

  return (
    <>
      <div className="honeycomb-__MICRO_APP_NAME__" style={Attributes}>
        <div>
          {greeting}
        </div>
      </div>
      <style>
        {css}
      </style>
    </>
  );
});

__MicroAppName__View.propTypes = {
  vm: PropTypes.object,
};

__MicroAppName__View.defaultProps = {
  vm: {},
};

export default __MicroAppName__View;
