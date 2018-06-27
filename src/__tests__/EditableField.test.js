import React from 'react';
import {shallow, mount} from 'enzyme';

import EditableField from '../components/EditableField';

describe('<EditableField />', () => {
    it('Renders without crashing', () => {
        shallow(<EditableField />);
    });

    // it('Should toggle `editable` state' when onClose method is called', () => {

    // });

    // it('Should call something when edit point input button is closed', () => {

    // });

});