import renderer from 'react-test-renderer';
import ExampleComponent from '../src/example-component';
import React from 'react';

describe('Basic Tests', () => {
    test('it should handle my example component', () => {
        const component = renderer.create(<ExampleComponent id={2} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
