import React, { Component } from 'react';
import ColorSelector from './ColorSelector';
import Shape from './Shape';
import TextSelector from './TextSelector';


export default class App extends Component {
  

  state = {
    ColorSelector: '',
    color: '#000000',
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
      <>
      <h1>React Quiz</h1>

        <ColorSelector 
          colorSelector={colorSelector}
          onChange={this.handleChange}
        
        />

        <TextSelector 
          textSelector={textSelector}
        />
        <Shape
        shape={shape} 
        />
        
      </>
    );
  }
}
