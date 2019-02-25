import React from 'react';
import PropTypes from 'prop-types';

export default function TextSelector({ title, updateInput }) {
  return (
    <>
      <span>Title Text: </span>
      <input type='text' name='title' value={title} onChange={updateInput} />
    </>
  );
}

TextSelector.propTypes = {
  title: PropTypes.string.isRequired,
  updateInput: PropTypes.func.isRequired
};
