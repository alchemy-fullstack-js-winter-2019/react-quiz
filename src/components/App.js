import React, { PureComponent } from 'react';
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
          <span>Title Text: </span>
          <input type='text' name='title' value={title} onChange={this.updateInput} />
          <span>Title Color: </span>
          <input type='color' name='titleColor' value={titleColor} onChange={this.updateInput} />
          <span>Background Color: </span>
          <input type='color' name='backgroundColor' value={backgroundColor} onChange={this.updateInput} />
        </div>

        <div style={{ width: '200px', height: '200px', backgroundColor: backgroundColor }}>
          <h2 style={{ color: titleColor }}>{title}</h2>
        </div>

      </div>
    );
  }
}

export default MyClass;

