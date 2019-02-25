import React, { Component } from 'react';
import TextSelector from './TextSelector';

export default class App extends Component {
  state = {
    textInput: ''
  }

  handleChange = ({ target }) => {
    this.setState({ textInput: target.value });
  }

  render() {
    const { textInput } = this.state;

    return (
      <>
        <TextSelector
          textInput={textInput}
          handleChange={this.handleChange}
        />
      </>
    );
  }
};
