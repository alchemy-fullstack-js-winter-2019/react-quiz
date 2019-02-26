import React from 'react';
// import PropTypes from 'prop-types';

export default class TextSelector extends Component {
  state = {
    Text: ''
  };
  
function TextSelector({ text, onChange }) {
  return (
    <form>
      <label>Text:</label>
      <TextSelector name="text" text={text} onChange={onChange}/>
    </form>
  );
}
