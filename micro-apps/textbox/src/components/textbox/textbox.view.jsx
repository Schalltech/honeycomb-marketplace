import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import css from '../../css';

const TextboxView = observer((props) => {

  const {
    vm: {
      text,
      Attributes,
      placeholder,
    },
    vm,
  } = props;

  return (
    <>
      <input
        className="honeycomb-textbox"
        placeholder={placeholder || ''}
        value={text}
        onChange={(e) => { vm.text = e.target.value; }}
        style={Attributes}
        type="text"
      />
      <style>
        {css}
      </style>
    </>
  );
});

TextboxView.propTypes = {
  vm: PropTypes.object,
};

TextboxView.defaultProps = {
  vm: {},
};

export default TextboxView;
