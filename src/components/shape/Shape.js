import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TextSelector from '../text/TextSelector';
import ColorSelector from '../color/ColorSelector';

function Shape({ text, fontColor, backgroundColor, handleChange }) {
  return (
    <Fragment>
      <TextSelector
        handleChange={handleChange}
        text={text}
      />
      <ColorSelector 
        fontColor={fontColor}
        backgroundColor={backgroundColor}
        handleChange={handleChange}
      />

      <h2>{text}</h2>
    </Fragment>
  );
}

Shape.propTypes = {
  handleChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  fontColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
};

export default Shape;
