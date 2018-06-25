import React from 'react';
import {shallow, mount} from 'enzyme';

import ViewRound from '../components/ViewRound';

describe('<ViewRound />', () => {
    it('Renders without crashing', () => {
        shallow(<ViewRound />);
    });
});