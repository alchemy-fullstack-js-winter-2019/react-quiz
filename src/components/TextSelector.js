import React from 'react';
import PropTypes from 'prop-types';


function TextSelector({ handleChange }) {

    return (
        <label>IMAGE TEXT 
            <input type='text' name="ImageText" onChange={handleChange}/>
        </label>
    );
}

TextSelector.propTypes = {
    handleChange: PropTypes.func.isRequired
};

export default TextSelector;
