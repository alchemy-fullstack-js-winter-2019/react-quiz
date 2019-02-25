import React from 'react';
import PropTypes from 'prop-types';

function ColorSelector({ fontColor, backColor, handleChange }) {
  return (
    <>
      <p>Font Color: <input type="color" name="fontColor" value={fontColor} onChange={handleChange} /></p>
      <p>Background Color: <input type="color" name="backColor" value={backColor} onChange={handleChange} /></p>
    </>
  );
}

ColorSelector.propTypes = {
  fontColor: PropTypes.string.isRequired,
  backColor: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default ColorSelector;
