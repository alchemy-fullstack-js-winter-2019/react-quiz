import React, { PureComponent } from 'react';
import TextInput from './TextInput';

class App extends PureComponent {
    state = {
      text: ''
    };
    handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value });
    };

    render(){
      return (
        <>
          <h1>Hi</h1>
          <TextInput handleChange={this.handleChange}/>
        </>
      );
    } 
}

export default App;
