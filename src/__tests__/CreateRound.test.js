import React from 'react';
import {shallow, mount} from 'enzyme';

import CreateRound from '../components/CreateRound';

describe('<CreateRound />', () => {
    it('Renders without crashing', () => {
        shallow(<CreateRound />);
    });
});