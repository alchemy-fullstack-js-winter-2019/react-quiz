import React, { Component } from 'react';
import Text from '../components/Text';
import Color from './Color';

class App extends Component {
  state = {
    text: '',
    color: '#4286f4'

  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  render() {
    return (
      <>
      <h1>React Quiz</h1>
      <Text
        text={this.state.text} 
        handleChange={this.handleChange} 
      />
      <Color
        text={this.state.text}
        color={this.color}
        onChange={this.handleChange}
      />
      </>

    );
  }
}

export default App;
