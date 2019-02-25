import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ text, handleChange }) => {

  return (
    <div>
      <label name="text">Type your text</label>
      <input name="text" value={text} type="text"onChange={handleChange} />
    </div>
  );
};

Text.propTypes = {
  text: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};



export default Text;
