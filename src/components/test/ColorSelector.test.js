import React from 'react';
import ColorSelector from '../ColorSelector';
import renderer from 'react-test-renderer';

describe('ColorSelector', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <ColorSelector />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
