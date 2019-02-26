import React, { PureComponent } from 'react';

const divStyle = {
  color: 'blue'

};

export default class Demo extends PureComponent {
  state = {
    h1: ''
    // footer: '',
    // img: ''

  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  textControl = ({ }) => {
    return (
      <>
      <input type='text' name='h1' value={h1} placeholder='header' onChange={this.handleChange}/>
      </>
    )
  }

  render() {
    const { h1 } = this.state;
    return (
      <>
      <textControl />
      <div>
        <h1>{h1}</h1>
      </div>

      </>
    );
  }

}
