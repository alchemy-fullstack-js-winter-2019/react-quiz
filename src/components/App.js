import React, { PureComponent } from 'react';
import TextInput from './TextInput';
import Color from './Color';

class App extends PureComponent {
    state = {
      text: '',
      color: null
    };
    handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value });
    };

    render(){
      return (
        <>
          <h1>Hi</h1>
          <TextInput handleChange={this.handleChange}/>
          <Color handleChange={this.handleChange}/>
        </>
      );
    } 
}

export default App;
