import React from 'react';
import renderer from 'react-test-renderer';
import ColorSelector from './ColorSelector';

describe('Color', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <ColorSelector color="#00000" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

