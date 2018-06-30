import React from 'react';
import App from '../components/App';
import {shallow, mount} from 'enzyme';

describe('<App />', () => {
    it('Renders without crashing', () => {
        shallow(<App />);
    });

    // it('Should render a div with .main-content for a className', () => {
    //     const wrapper = shallow(<App />);
    //     expect(wrapper.hasClass('main-content')).toEqual(true);
    // });

});