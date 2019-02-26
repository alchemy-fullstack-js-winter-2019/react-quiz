import React, { Component } from 'react';
// import ColorSelector from './ColorSelector';
// import TextSelector from './TextSelector';
// import Shape from './Shape';

export default class App extends Component {
  state = {
    Text: '',
    backgroundColor: '#000000'
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { 
      text,
      backgroundColor
    } 
      = this.state;

    return (
        <>
          <h1>React Quiz</h1>
              text={text}
              backgroundColor={backgroundColor}
              onChange={this.handleChange}
        </>
    );
  }
}

