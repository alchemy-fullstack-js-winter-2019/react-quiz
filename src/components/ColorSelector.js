import React from 'react';
import PropTypes from 'prop-types';


function ColorSelector({ color, onChange }) {
  return (
    <input name="color" color={color}  type="color" onChange={onChange} placeholder="color"/>
  );
}

ColorSelector.propTypes = {
  color: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ColorSelector;
