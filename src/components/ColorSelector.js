import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class ColorSelector extends Component {
  state = {
    color: '#000000'
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { 
      color
    } 
    = this.state;
    
    return (
      <div>
        <label>Background Color:</label>
        <input type="color" name={`${name}Color`} value={color} onChange={onChange} />
      </div>
    );
  }
}
