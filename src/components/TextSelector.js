import React from 'react';
import PropTypes from 'prop-types';

function TextSelector({ text, onChange }) {
  return (
    <input type="text" value={text} onChange={onChange}/>
  );
}

TextSelector.propTypes = {
  text: PropTypes.string,
  onChange: PropTypes.func
};

export default TextSelector;
