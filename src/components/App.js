import React, { Fragment, PureComponent } from 'react';
import Shape from './shape/Shape';
import '../css/App.css';
import 'normalize-css';

export default class App extends PureComponent {
  state = {
    text: '', 
    fontColor: '',
    backgroundColor: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { text, fontColor, backgroundColor } = this.state;
    return (
      <Fragment>
        <h1>React Quiz</h1>
        <Shape 
          text={text}
          fontColor={fontColor}
          backgroundColor={backgroundColor}
          handleChange={this.handleChange}
        />
      </Fragment>
    );
  }
}

