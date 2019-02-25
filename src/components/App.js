import React, { Component } from 'react';
import Controls from './Controls';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  state = { 
    text: '',
    color: '',
    //shape = ''
  }

handleChange = ({ target }) => {
  this.setState({ [target.name]: target.value }, () => {
  });
};

render() {
  const { text, color } = this.state;
  return (
    <>
      <div>
        <h1>TextEditor</h1>
        <Controls
        text={text} 
        color={color}
        onChange={this.handleChange} />
      </div>
    </>
  );
}
}

// Controls.propTypes = {
//   color: PropTypes.string.isRequired,
//   text: PropTypes.string.isRequired
// }
// }