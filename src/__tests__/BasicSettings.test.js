import React from 'react';
import {shallow, mount} from 'enzyme';

import BasicSettings from '../components/BasicSettings';

describe('<BasicSettings />', () => {
    it('Renders without crashing', () => {
        shallow(<BasicSettings />);
    });
});