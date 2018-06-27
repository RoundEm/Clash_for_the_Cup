import React from 'react';
import {shallow, mount} from 'enzyme';

import PointSettings from '../components/PointSettings';

describe('<PointSettings />', () => {
    it('Renders without crashing', () => {
        shallow(<PointSettings />);
    });

    // it('Should set input state when onChange is triggered', () => {

    // });

    // it('Should call addDefinition method when .add-button button is clicked', () => {

    // });
});