import React from 'react';
import PropTypes from 'prop-types';

function ColorSelector({ color, onChnage}) {
  return (
    <input type="color" onChange={onChange}/>
  );
}
ColorSelector.PropTypes = {
  color: PropTypes.string,
  onChange: PropTypes.string
};

export default ColorSelector;
