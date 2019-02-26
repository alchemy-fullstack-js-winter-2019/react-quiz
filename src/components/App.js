import React, { PureComponent } from 'react';
import TextInput from './TextInput';
import Color from './Color';
import Display from './Display';

class App extends PureComponent {
    state = {
      text: '',
      color: '#aa7942'
    };
    handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value });
    };

    render(){
      const { text, color } = this.state;
      return (
        <>
          <h1>Hi</h1>
          <TextInput handleChange={this.handleChange}/>
          <Color handleChange={this.handleChange}/>
          <Display text={text} color={color}/>
        </>
      );
    } 
}

export default App;
