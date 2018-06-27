import React from 'react';
import {shallow, mount} from 'enzyme';

import ActiveLeague from '../components/ActiveLeague';

describe('<ActiveLeague />', () => {
    it('Renders without crashing', () => {
        shallow(<ActiveLeague />);
    });

    // it('Should render a points table when point definitions exist', () => {
    //     const wrapper = mount(<ActiveLeague />);
    //     if (wrapper.state().points.length === 0) {
    //         expect(wrapper.find('table').children()).to.have.legnth(0)
    //     }
    // });

    // it('Should sort point weights from highest to lowest value, () => {
    //     const wrapper = shallow(<ActiveLeague />);
    //     wrapper.find('')
    // });
});

// expect(<variable name assigned to component being tested>.find('className').text()).toBe('String passed in')

// componentWrapper.instance().handleChange({ target: {value: 'Some text'}})
// expect(componentWrapper.state().toDo).toBe('Some text)