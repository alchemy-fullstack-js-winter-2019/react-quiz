import React, { Component } from 'react';
import ColorSelector from './ColorSelector';
import TextSelector from './TextSelector';
import Shape from './Shape';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.eleRef = React.createRef();
  }

  state = {
    text: 'hello',
    backgroundColor: 'red',
    fontColor: 'black'
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    return(
      <>
      <TextSelector />
      <ColorSelector 
      onChange={this.handleChange} 
      background={this.state.backgroundColor} fontColor={this.state.fontColor}/>
      <Shape 
      eleRef={this.eleRef}
      text={this.state.text}
      backgroundColr={this.state.backgroundColor}
      fontColor={this.fontcolor}
      />
      </>
    )
  }

}