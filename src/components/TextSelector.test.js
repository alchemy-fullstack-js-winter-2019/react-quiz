import React from 'react';
import renderer from 'react-test-renderer';
import TextSelector from './TextSelector';


describe('TextSelector Test', () => {
    it('matches a snapshot', () => {
        const tree = renderer.create(
            <TextSelector handleChange={() => {}}/>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
