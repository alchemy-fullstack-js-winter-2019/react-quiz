import React from 'react';
import renderer from 'react-test-renderer';
import ColorSelector from '../src/components/Shape';



describe('ColorSelector', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <ColorSelector />
    ).toJSON();
  
    expect(tree).toMatchSnapshot();
  });
});