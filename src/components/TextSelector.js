import React from 'react';
import PropTypes from 'prop-types';

export default function TextSelector({ text, onChange }) {
  return (
    <input onChange={onChange} name="text" type="text" value={text}></input>
  );
}

TextSelector.propTypes = {
  text: PropTypes.string,
  onChange: PropTypes.func
};
