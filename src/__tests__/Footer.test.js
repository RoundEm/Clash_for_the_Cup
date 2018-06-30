import React from 'react';
import {shallow, mount} from 'enzyme';

import Footer from '../components/Footer';

const date = new Date();
const year = date.getFullYear();

describe('<Footer />', () => {
    it('Renders without crashing', () => {
        shallow(<Footer />);
    });

    it('Should render a footer with proper content', () => {
        const wrapper = shallow(<Footer />);
        const value = wrapper.find('p').text();
        expect(value).toBe(`© Jason Roundtree ${year}`);
    });
});