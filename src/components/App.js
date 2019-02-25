import React, { Component } from 'react';
import TextSelector from './TextSelector';
import Shape from './Shape';
import ColorSelector from './ColorSelector';


export default class App extends Component {
  state = {
    text: '',
    color: ''
  }
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }
  render() {
    const { text, color } = this.state;
    return ( 
      <>
      <TextSelector text={text} onChange={this.handleChange} />
      <ColorSelector color={color} onChange={this.handleChange} />
      <Shape color={color} text={text} />
      </>
    );
  }
}