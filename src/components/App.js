import React, { Component } from 'react';
import TextSelector from './TextSelector';
import ColorSelector from './ColorSelector';
import Shape from './Shape';

export default class App extends Component {
  state = {
    textInput: '',
    fontColor: '#000000',
    backColor: '#ffffff'
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { textInput, fontColor, backColor } = this.state;

    return (
      <>
        <TextSelector
          textInput={textInput}
          handleChange={this.handleChange}
        />
        <ColorSelector
          fontColor={fontColor}
          backColor={backColor}
          handleChange={this.handleChange}
        />
        <Shape
          inputText={textInput}
          backColor={backColor}
          fontColor={fontColor}
        />
      </>
    );
  }
};
