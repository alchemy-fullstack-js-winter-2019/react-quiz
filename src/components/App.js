import React, { Component } from 'react';
import fileSaver from 'file-saver';
import 'normalize-css';
import Shape from './Shape';
import ColorSelector from './ColorSelector';
import TextSelector from './TextSelector';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.textRef = React.createText(); 
  }
  state = {
    header: '',
    headerColor: '',
    headerFont: '',
    text: ''
  }

  makeText = async(event) => {
    event.preventDefault();
    fileSaver.saveAs(text); 
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { header, headerColor, headerFont } = this.state;
    return (
      <>
        <div className={styles.text}>
          <h1>Hi</h1>
          <MemeForm
            header={header}
            headerColor={headerColor}
            headerFont={headerFont}
            onChange={this.handleChange}
            onSubmit={this.makeText} 
          />
          <Shape
            text={text}
            color={color}
            backgroundColor={backgroundColor}
           />
        </div>
      </>
    );
  }
}
