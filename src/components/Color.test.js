import React from 'react';
import renderer from 'react-test-renderer';
import Color from './Color';

describe('Color', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <Color />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});


