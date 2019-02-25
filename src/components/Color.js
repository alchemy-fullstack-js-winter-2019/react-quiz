import React from 'react';
import PropTypes from 'prop-types';

function Color({ handleChange }) {
  return (
    <input onChange={handleChange} name="color" type="color"></input>
  );
}

Color.propTypes = {
  handleChange: PropTypes.func.isRequired  
};

export default Color;
