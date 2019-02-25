import React from 'react';
import PropTypes from 'prop-Types';

// function TextControl({ name, text, color, onChange, font }) {
//   return (
//     <>
//         <input type="text" name={name} value={text}  placeholder={name} font={font} onChange={onChange}  />
      
//         <input type ="color" name={`${name}Color`} value={color} onChange={onChange} font={font} />
        
      
//     </>
//   );
// }


function TextSelector({ onChange, text }) {
  return (
    <>
    <input type='text' name='h1' value={text} placeholder='h1' onChange={onChange} />
    </>

  );
}

TextSelector.propTypes = {
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  
};

export default TextSelector;
