import React from 'react';
import PropTypes from 'prop-types';

function Shape({ text, color, backgroundColor }) {
  return (
    <div div style={{ width: '100px', height: '100px' }} backgroundColor={backgroundColor}>
      <h2 style={{ color: `${color}` }}> {text}</h2>
    </div>
  );

}

Shape.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string
};

export default Shape;
