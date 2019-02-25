import React, { Component } from 'react';
import ColorSelector from './ColorSelector';
import TextSelector from './TextSelector';
import Shape from './Shape';
// import { setServers } from 'dns';

export default class App extends Component () {
    state = {
      text: '',
      color: ''
    };

    handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value });
    };

    render() {
      const { text, color, backgroundColor } = this.state;
      return (
          <>
              <ColorSelector color={color} backgroundColor={backgroundColor}/>
              <TextSelector text={text} onChange={this.handleChange}/>
              <Shape text={text} color={color} backgroundColor={backgroundColor} />
          </>
      );
    }
}
