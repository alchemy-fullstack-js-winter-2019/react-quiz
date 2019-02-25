import React from 'react';
import renderer from 'react-test-renderer';
import ColorSelector from './ColorSelector';

describe('App', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <ColorSelector
        fontColor='#000000'
        backColor='#ffffff'
        handleChange={ () => { } }
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
