import React from 'react';
import PropTypes from 'prop-types';


function Shape({ FontColor, BackgroundColor, ImageText }) {

    return (

        <div style={{ width: '100px', height: '100px', background: BackgroundColor, color: FontColor  }}>
            {ImageText}
        </div>  
    );
}

Shape.propTypes = {
    FontColor: PropTypes.string.isRequired,
    BackgroundColor: PropTypes.string.isRequired,
    ImageText: PropTypes.string.isRequired
};

export default Shape;
