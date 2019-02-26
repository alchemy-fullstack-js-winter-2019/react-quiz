import React from 'react';
import PropTypes from 'prop-types';

function TextSelector({ textInput, handleChange }) {
  return (
    <p>Enter Text: <input type="text" name="textInput" value={textInput} onChange={handleChange} /></p>
  );
}

TextSelector.propTypes = {
  textInput: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default TextSelector;
