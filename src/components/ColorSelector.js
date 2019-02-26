import React from 'react';
import PropTypes from 'prop-types';

export default function ColorSelector({ fontColor, backgroundColor, onChange }) {
  return (
    <>
    <input onChange={onChange} type="color" name="fontColor" value={fontColor}></input>
    <input onChange={onChange} type="color" name="backgroundColor" value={backgroundColor}></input>
    </>
  );
}

ColorSelector.propTypes = {
  fontColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  onChange: PropTypes.func
};


