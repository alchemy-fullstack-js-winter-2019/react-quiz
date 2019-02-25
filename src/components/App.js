import React, { PureComponent } from 'react';
import Shapes from './Shape';
import ColorSelector from './ColorSelector';
import TextSelector from './TextSelector';
// import styles from './App.css';

class MyClass extends PureComponent {
  state = {
    title: '',
    titleColor: '',
    backgroundColor: ''
  };

  updateInput = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { title, titleColor, backgroundColor } = this.state;

    return (
      <div >
        <h1>React Quiz</h1>
        <div >
          <TextSelector
            title={title}
            updateInput={this.updateInput}
          />

          <ColorSelector
            titleColor={titleColor}
            backgroundColor={backgroundColor}
            updateInput={this.updateInput}
          />
        </div>

        <Shapes
          title={title}
          titleColor={titleColor}
          backgroundColor={backgroundColor}
        />

      </div>
    );
  }
}

export default MyClass;

