import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function TextSelector({ text, handleChange }) {
  return (
    <Fragment>
      <form>
        <label>
          <span>Text:</span>
          <input type='text' name='text' value={text} onChange={handleChange}></input>
        </label>
      </form>
    </Fragment>
  );
}

TextSelector.propTypes = {
  handleChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default TextSelector;
