import React from 'react';
import PropTypes from 'prop-types';

function Shape({ eleRef, text, fontColor, backgroundColor }) {
  return (
    <div ref={eleRef} style={{ width: '100px', height: '100px', color: fontColor, backgroundColor: backgroundColor }}>
      <h1>
        {text}
      </h1>
    </div>
  );
}

Shape.propTypes = {
  eleRef: PropTypes.object,
  text: PropTypes.string,
  fontColor: PropTypes.string,
  backgroundColor: PropTypes.string
};

export default Shape;
