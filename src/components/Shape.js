import React from 'react';
import PropTypes from 'prop-types';

export default function Shape({ title, backgroundColor, titleColor }) {
  return (
    <div style={{ width: '200px', height: '200px', backgroundColor: backgroundColor }}>
      <h2 style={{ color: titleColor }}>{title}</h2>
    </div>
  );
}

Shape.propTypes = {
  title: PropTypes.string,
  backgroundColor: PropTypes.string,
  titleColor: PropTypes.string
};
