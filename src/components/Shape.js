import React from 'react';
import PropTypes from 'prop-types';

function Shape({ text, color }) {

  const style = {
    color: color
  };
  return (
    <>
    <div style={style}>
      <h1> { text }</h1>
    </div>
    </>
  );
}

Shape.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default Shape;
