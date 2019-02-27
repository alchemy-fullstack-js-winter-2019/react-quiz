import React from 'react';
import PropTypes from 'prop-types';

function TextSelector({
  text,
  onChange
})

return (
  <form>
    <input type="text" name="text" value={text} onChange={onChange} />
  </form>
);

TextSelector.propTypes = {
  text: PropTypes.string.isRequired
  onChange: PropTypes.func.isRequired
};

export default TextSelector;