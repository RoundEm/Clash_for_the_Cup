import React from 'react';
import {shallow, mount} from 'enzyme';

import PointSettings from '../components/PointSettings';

describe('<PointSettings />', () => {
    it('Renders without crashing', () => {
        shallow(<PointSettings />);
    });
});