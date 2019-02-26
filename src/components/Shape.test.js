import React from 'react';
import renderer from 'react-test-renderer';
import Shape from './Shape';


describe('App', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <Shape/>
    ).toJSON();
  
    expect(tree).toMatchSnapshot();

  });
});
