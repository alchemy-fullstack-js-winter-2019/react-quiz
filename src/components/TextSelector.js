import React from 'react';
import PropTypes from 'prop-types';

function newText({ header, headerColor, headerFont, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <span>Write your text here:</span>
      <TextControl name="header" 
      text={header} 
      color={headerColor} 
      font={headerFont} 
      onChange={onChange} /> 
    </form>
  );
}

export default TextSelector;