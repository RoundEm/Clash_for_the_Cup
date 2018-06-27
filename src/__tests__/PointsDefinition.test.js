import React from 'react';
import {shallow, mount} from 'enzyme';

import PointsDefinition from '../components/PointsDefinition';

describe('<PointsDefinition />', () => {
    it('Renders without crashing', () => {
        shallow(<PointsDefinition />);
    });

    // it('Should fire some callback when onUpdate props are received', () => {

    // })
});