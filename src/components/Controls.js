import React from 'react';
import PropTypes from 'prop-types';

function Controls({ text, color, onChange }) {
  return (
    <div>
      <form>
       <TextControl text={text} color={color} onChange={onChange} />
      </form>
    </div>
  );
}

Controls.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

function TextControl({ text, color }) {
  return (
    <>
    <input type="text" text={text} onChange={onChange} />
    <input type="color" value={color} onChange={onChange} />
    </>
  );
}

TextControl.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Controls;