import React from 'react';
import PropTypes from 'prop-types';

function Shape({ inputText, fontColor, backColor }) {
  return (
    <div style={{ width: '300px', height: '300px', color: backColor }}>
      <h2 style={{ color: fontColor }}>{inputText}</h2>
    </div>
  );
}

Shape.propTypes = {
  inputText: PropTypes.string.isRequired,
  fontColor: PropTypes.string.isRequired,
  backColor: PropTypes.string.isRequired
};

export default Shape;
