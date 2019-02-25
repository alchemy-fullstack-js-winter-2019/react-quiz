import React from 'react';
import PropTypes from 'prop-types';

function Shape({ header, textColor, textFont}) {
  let fontSize = `${100 - header.length}px`;
  const Style = {
    color: textColor,
    fontFamily: textFont,
    fontSize
  };
  const backgroundColor = {
    color: backgroundColor
  };

  return (  
    <div style={{ width: '100px', height: '100px' }}> 
      <p style={headerStyle}>{header}</p>
    </div>
  );
}
Shape.propTypes = {
  header: PropTypes.string.isRequired,
  headerColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
};

export default Shape;
