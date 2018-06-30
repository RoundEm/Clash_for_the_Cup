import React from 'react';
import {shallow, mount} from 'enzyme';

import BasicSettings from '../components/BasicSettings';

describe('<BasicSettings />', () => {
    it('Renders without crashing', () => {
        shallow(<BasicSettings />);
    });

    // it('Should set the backgroundColor of the div with the .section-container class to be #e8ebef if this.state.activeComponent equals 1', () => {
        
    // });
});