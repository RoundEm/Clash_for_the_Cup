import React from 'react';
import {shallow, mount} from 'enzyme';

import Navigation from '../components/Navigation';

describe('<Navigation />', () => {
    it('Renders without crashing', () => {
        shallow(<Navigation />);
    });
});