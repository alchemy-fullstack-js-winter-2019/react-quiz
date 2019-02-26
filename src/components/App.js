import React, { Component } from 'react';
import TextSelector from './TextSelector';
import Shape from './Shape';
import ColorSelector from './ColorSelector';


export default class App extends Component {
  state = {
    text: '',
    color: '',
    backgroundcolor: ''
  }
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }
  render() {
    const { text, color, backgroundcolor } = this.state;
    return ( 
      <>
      <TextSelector text={text} onChange={this.handleChange} />
      <ColorSelector backgroundcolor={backgroundcolor} color={color} onChange={this.handleChange} />
      <Shape backgroundcolor={backgroundcolor} color={color} text={text} />
      </>
    );
  }
}