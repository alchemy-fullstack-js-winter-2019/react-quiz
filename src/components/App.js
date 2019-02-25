import React, { Component } from 'react';
import ColorSelector from './ColorSelector';
import TextSelector from './TextSelector';


class App extends Component {
    state = {
        FontColor: 'black',
        BackgroundColor: 'white'
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
    };

    render() {
        return (
        <>
      <h1> Hello world</h1>
      <ColorSelector handleChange={this.handleChange}/>
      <TextSelector handleChange={this.handleChange}/>

      </>
        );
    }
}


export default App;
