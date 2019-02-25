import React from 'react';
import renderer from 'react-test-renderer';
import Shape from './Shape';


describe('Search Test', () => {
    it('matches a snapshot', () => {
        const tree = renderer.create(
            <Shape 
                BackgroundColor={'white'}
                FontColor={'black'}
                ImageText={'This is a string'}
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
