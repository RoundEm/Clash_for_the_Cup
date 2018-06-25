import React from 'react';
import {shallow, mount} from 'enzyme';

import Router from '../components/Router';

describe('<Router />', () => {
    it('Renders without crashing', () => {
        shallow(<Router />);
    });
});