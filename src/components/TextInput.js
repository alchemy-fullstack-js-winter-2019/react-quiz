import React from 'react';
import PropTypes from 'prop-types';

function TextInput({ handleChange }) {
  return (
    <>
        <input type="text" name="text" onChange={handleChange}></input>
    </>
  );
}

TextInput.propTypes = {
  handleChange: PropTypes.func.isRequired  
};

export default TextInput;
