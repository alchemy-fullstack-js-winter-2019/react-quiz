import React from 'react';
import PropTypes from 'prop-types';
import styles from './App.css';

function Display({ header, headerColor, textRef }) {
  let fontSize = `${100 - header.length}px`;
  const headerStyle = {
    color: headerColor,
    fontFamily: headerFont,
    fontSize
  };

  return (  
    <div className={styles} ref={textRef}>
      <p style={headerStyle}>{header}</p>
    </div>
  );
}

Display.propTypes = {
  memeRef: PropTypes.object.isRequired,
  header: PropTypes.string.isRequired,
  headerColor: PropTypes.string.isRequired,
  headerFont: PropTypes.string.isRequired,
};

export default ColorSelector;
