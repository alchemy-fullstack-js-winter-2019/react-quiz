import React from 'react';
import PropTypes from 'prop-types';

function Shape({ color, onChange }) {
  return (
    <>
    <p type="color" name={`${name}Color`} value={color} onChange={onChange} />
    </>
     
  );
}

Shape.propTypes = {
  onChange: PropTypes.func.isRequired,
  color: PropTypes.string,
};


export default Shape;
