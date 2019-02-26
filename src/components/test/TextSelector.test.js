import React from 'react';
import TextSelector from '../TextSelector';
import renderer from 'react-test-renderer';

describe('TextSelector', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <TextSelector />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
