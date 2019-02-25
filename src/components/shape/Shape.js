import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TextSelector from '../text/TextSelector';
import ColorSelector from '../color/ColorSelector';
import styles from '../../css/App.css';

function Shape({ text, fontColor, backgroundColor, handleChange }) {
  return (
    <Fragment>
      <TextSelector
        handleChange={handleChange}
        text={text}
      />
      
      <ColorSelector 
        fontColor={fontColor}
        backgroundColor={backgroundColor}
        handleChange={handleChange}
      />

      <div className={styles.container} style={{ backgroundColor: backgroundColor }}>
        <h2 style={{ color: fontColor }} className={styles.header}>{text}</h2>
      </div>
    </Fragment>
  );
}

Shape.propTypes = {
  handleChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  fontColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
};

export default Shape;
