import React from 'react';
import PropTypes from 'prop-types';

function Shape({ text, color, backgroundcolor }) {

  const style = {
    color: color,
  };

  const style2 = {
    backgroundColor: backgroundcolor
  };

  return (
    <>
    <div style={style2}>
      <h1 style={style}> { text }</h1>
    </div>
    </>
  );
}

Shape.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  backgroundcolor: PropTypes.string.isRequired
};

export default Shape;
