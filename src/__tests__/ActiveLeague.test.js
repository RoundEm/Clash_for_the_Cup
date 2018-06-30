import React from 'react';
import {shallow, mount} from 'enzyme';

import ActiveLeague from '../components/ActiveLeague';

describe('<ActiveLeague />', () => {
    it('Renders without crashing', () => {
        shallow(<ActiveLeague />);
    });

    // it('Should call handleDeleteLeague when .delete button is clicked', () => {
    //     const wrapper = shallow(<ActiveLeague />);
    //     wrapper.find('.delete').simulate('click');
    //     expect(wrapper.instance().handleDeleteLeague()).toHaveBeenCalled();
    // });

    // it('Should sort point weights from highest to lowest value, () => {
    //     const wrapper = shallow(<ActiveLeague />);
    //     wrapper.find('')
    // });

    // it('Should ensure that state is updated when league ajax data is returned', () {
    //     mock network res and ensure that state is updated
    // })
});