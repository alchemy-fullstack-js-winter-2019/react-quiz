import React, { Component } from 'react';

import ColorSelector from './ColorSelector';
import TextSelector from './TextSelector';
import Shape from './Shape';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    text: '',
    color: '',
  };

  render() {
    const{
      text,
      color
    } = this.state;

    return (
      <>
      <TextSelector />
      <ColorSelector />
      <Shape />
      </>
          );
  }
}