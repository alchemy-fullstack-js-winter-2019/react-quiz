import React from 'react';
import PropTypes from 'prop-types';

export default function ColorSelector({ backgroundColor, titleColor, updateInput }) {
  return (
    <>
      <span>Title Color: </span>
      <input type='color' name='titleColor' value={titleColor} onChange={updateInput} />
      <span>Background Color: </span>
      <input type='color' name='backgroundColor' value={backgroundColor} onChange={updateInput} />
    </>
  );
}

ColorSelector.propTypes = {
  backgroundColor: PropTypes.string,
  titleColor: PropTypes.string,
  updateInput: PropTypes.func
};
