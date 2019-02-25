import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function ColorSelector({ fontColor, backgroundColor, handleChange }) {
  return (
    <Fragment>
      <form>
        <label>
          <span>Font Color:</span>
          <input type='color' name='fontColor' value={fontColor} onChange={handleChange}></input>
        </label>

        <label>
          <span>Background Color:</span>
          <input type='color' name='backgroundColor' value={backgroundColor} onChange={handleChange}></input>
        </label>
      </form>
    </Fragment>
  );
}

ColorSelector.propTypes = {
  handleChange: PropTypes.func.isRequired,
  fontColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
};

export default ColorSelector;
