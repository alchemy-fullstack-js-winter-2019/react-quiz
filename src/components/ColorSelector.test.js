import React from 'react';
import renderer from 'react-test-renderer';
import ColorSelector from './ColorSelector';

describe('Color', () => {
  it('matches a snapshot', () => {
    const color = {
      color: '#000000'
    };
    const tree = renderer.create(
      <ColorSelector color={color} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

