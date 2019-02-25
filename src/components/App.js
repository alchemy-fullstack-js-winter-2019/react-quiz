import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);

  }

  state = {
    text: '',
    background: ''
  }

  // handleChange = ({ target }) => {
  //   event.preventDefault();
  //   this.setState({ [target.text]: target.value })
  // }

  render() {
    return(
      <h1>hi</h1>
    )
  }

}