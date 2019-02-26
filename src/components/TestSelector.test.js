import React from 'react';
import renderer from 'react-test-renderer';
import TextSelector from './TextSelector';

describe('Color', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <TextSelector text="hello" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

