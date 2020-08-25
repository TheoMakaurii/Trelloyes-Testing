import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

describe('Card Component Test', () => {

    // smoke test
    // checking to see if it renders at all
    it('should render without crashing', () => {
        const div1 = document.createElement('div');
        ReactDOM.render(<Card />, div1);
        ReactDOM.unmountComponentAtNode(div1);
    })
    // create a div element
    // render the component in the div
    // unmount the component to clean it up



    // snapshot test
    // checking to see if it renders correctly (matches snapshot that gets created on initial test)
    // const tree = renderer.create().toJSON();
    // expected the tree to match the ----- snapshot (method);
    it('should render correctly', () => {
        const tree = renderer  
            .create(<Card />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })


})