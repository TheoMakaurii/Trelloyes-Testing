import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card';
import renderer from 'react-test-renderer';


describe('card component', () => {

    // smoke test
    it('renders without crashing', () => {
        // create element
        const div = document.createElement('div');
        // render component in the element
        ReactDOM.render(<Card />, div);
        // unmount the component at that element
        ReactDOM.unmountComponentAtNode(div);
    });

    // snapshot test
    it('renders the UI as expected', () => {
        // tree to match snapshot
        // create the component with the attributes, and set it toJSON()
        // see if the tree JSON matches the snapshot
        // expect(tree).toMatchSnapshot() is a Jest function and method
        const tree = renderer
          .create(<Card title="Seventh Card" content="lorem ipsum"/>)
          .toJSON();
        expect(tree).toMatchSnapshot();  
        });
})