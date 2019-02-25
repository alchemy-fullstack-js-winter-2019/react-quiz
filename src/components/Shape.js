import React from 'react';
import PropTypes from 'prop-types';

function Shape({ text }) {
  return (
    <h1> { text }</h1>
  );
}

Shape.propTypes = {
  text: PropTypes.string.isRequired
};

export default Shape;
