import React from 'react';
import PropTypes from 'prop-types';

function ColorSelector({ color, onChange }) {
  return (
    <>
     <input type="color" name={`${name}Color`} value={color} onChange={onChange} />
     </>
  );
}

ColorSelector.propTypes = {
  onChange: PropTypes.func.isRequired,
  color: PropTypes.string,
};


export default ColorSelector;
