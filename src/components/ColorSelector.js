import React from 'react';
import PropTypes from 'prop-types';


function ColorSelector({ color, backgroundcolor, onChange }) {
  return (
    <>
    <input name="color" color={color}  type="color" onChange={onChange} placeholder="color"/>
    <input name="backgroundcolor" backgroundcolor={backgroundcolor}  type="color" onChange={onChange} placeholder="background-color"/>
    </>
  );
}

ColorSelector.propTypes = {
  color: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  backgroundcolor: PropTypes.string.isRequired
};

export default ColorSelector;
