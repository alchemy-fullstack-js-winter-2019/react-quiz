import React, { Component } from 'react';
import TextSelector from './TextSelector';
import Shape from './Shape';


export default class App extends Component {
  state = {
    text: '',
    textColor: ''
  }
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }
  render() {
    const { text } = this.state;
    return ( 
      <>
      <TextSelector text={text} onChange={this.handleChange} />
      <Shape text={text} />
      </>
    );
  }
}