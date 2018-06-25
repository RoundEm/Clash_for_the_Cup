import React from 'react';
import {shallow, mount} from 'enzyme';

import PointsDefinition from '../components/PointsDefinition';

describe('<PointsDefinition />', () => {
    it('Renders without crashing', () => {
        shallow(<PointsDefinition />);
    });
});