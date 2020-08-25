import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';
import renderer from 'react-test-renderer';

describe('list component test', () => {
    // smoke test 
    // see if it renders at all
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    // snapshot test
    it('renders UI as expected', () => {
        const tree = renderer
            .create(<List />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})