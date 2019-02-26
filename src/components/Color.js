import React from 'react';
import PropTypes from 'prop-types';

function Color({ text, textColor, onChange }) {
  return (
    <>
    <div>
      <TextControl name="text" text={text} color={textColor} onChange={onChange} />
     
    </div>
    </>
  );
}

Color.propTypes = {
  text: PropTypes.func.isRequired,
  textColor: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  // onSubmit: PropTypes.func.isRequired
};

function TextControl({ text, color, onChange }) {
  return (
    <>
    <select type="text" name={text} value={text} onChange={onChange} />
    <select type="color" name={`${name}Color`} value={color} onChange={onChange} />
    </>
  );
}

TextControl.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired
};

export default Color;
