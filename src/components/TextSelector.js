import React from 'react';
import PropTypes from 'prop-types';

function TextSelector({ name, onChange }) {
  return (
    <>
     <input type="text" name={name} value={text} onChange={onChange}/>
     </>
  );
}

TextSelector.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};


export default TextSelector;
