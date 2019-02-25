import React, { Fragment, PureComponent } from 'react';
import TextSelector from '../text/TextSelector';
import ColorSelector from '../color/ColorSelector';

export default class Shape extends PureComponent {
  // state = {
  //   text: '', 
  //   fontColor: '',
  //   backgroundColor: ''
  // };

  // handleChange = ({ target }) => {
  //   this.setState({ [target.name]: target.value });
  // };

  render() {
    const { text, fontColor, backgroundColor } = this.state;
    return (
      <Fragment>
        <TextSelector
          handleChange={this.handleChange}
          text={text}
        />
        <ColorSelector 
          fontColor={fontColor}
          backgroundColor={backgroundColor}
        />
      </Fragment>
    );
  }
}
