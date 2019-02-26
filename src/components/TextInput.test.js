import React from 'react';
import renderer from 'react-test-renderer';
import TextInput from './TextInput';

describe('TextInput', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <TextInput />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});


