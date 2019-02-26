import React from 'react';
import renderer from 'react-test-renderer';
import TextSelector from '../src/components/TextSelector';



describe('TextSelector', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <TextSelector />
    ).toJSON();
  
    expect(tree).toMatchSnapshot();
  });
});