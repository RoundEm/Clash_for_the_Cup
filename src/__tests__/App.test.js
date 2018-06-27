import React from 'react';
import {shallow, mount} from 'enzyme';

import App from '../components/App';

describe('<App />', () => {
    it('Renders without crashing', () => {
        shallow(<App />);
    });

    // it('Should render the Navigatigation component', () => {
    //     const wrapper = render(<Navigation />);
    //     expect(wrapper)
    // });

    // it('Should render a div with .main-content for a className', () => {
    //     const wrapper = render(<Navigation />);
    //     expect(wrapper)
    // });


});