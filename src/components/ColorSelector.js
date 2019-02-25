import React from 'react';
import PropTypes from 'prop-types';


function ColorSelector({ color, backgroundcolor, onChange }) {
  return (
    <>
    <h2> Text Color</h2>
    <input name="color" color={color}  type="color" onChange={onChange} placeholder="color"/>
    <h2>background-color</h2>
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
