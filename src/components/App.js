import React, { Component } from 'react';
import ColorSelector from './ColorSelector';
import TextSelector from './TextSelector';
import Shape from './Shape';


class App extends Component {
    state = {
        FontColor: 'black',
        BackgroundColor: 'white',
        ImageText: ''
    };

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
    };

    render() {
        const { FontColor, BackgroundColor, ImageText } = this.state;
        return (
        <>
            <h1> Hello world</h1>
            <ColorSelector handleChange={this.handleChange}/>
            <TextSelector handleChange={this.handleChange}/>
            <Shape
                FontColor={FontColor}
                BackgroundColor={BackgroundColor}
                ImageText={ImageText}
            />
        </>
        );
    }
}


export default App;
