import React from 'react';
import {shallow, mount} from 'enzyme';

import RoundSummary from '../components/RoundSummary';

describe('<RoundSummary />', () => {
    it('Renders without crashing', () => {
        shallow(<RoundSummary />);
    });
});