import React from 'react';
import PropTypes from 'prop-types';

function Display({ text, color }) {
  const style = { color: color };
  return (
    <>
        <div>
          <h2 style={style}>{text}</h2>
        </div>
    </>
  );
}


Display.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string  
};

export default Display;
