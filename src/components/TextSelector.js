import React from 'react';
import PropTypes from 'prop-types';

function TextSelector({ text, onChange }) {
  return (
    <input name="text" text={text} type="text" onChange={onChange} placeholder="text"/> 
  );
}

TextSelector.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};


export default TextSelector;

