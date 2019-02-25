import React, { Component } from 'react';
import PropTypes from 'prop-types';



function ColorSelector({ handleChange }) {


    return (

        <>
        <label>FONT COLOR 
            <input type='color' name="FontColor" onChange={handleChange}/>
        </label>
        <label>BACKGROUND COLOR 
            <input type='color' name="BackgroundColor" onChange={handleChange}/>
        </label>
        </>
    );

}

ColorSelector.propTypes = {
    handleChange: PropTypes.func.isRequired
};


export default ColorSelector;
