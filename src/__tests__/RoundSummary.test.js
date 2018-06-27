import React from 'react';
import {shallow, mount} from 'enzyme';

import RoundSummary from '../components/RoundSummary';

describe('<RoundSummary />', () => {
    it('Renders without crashing', () => {
        shallow(<RoundSummary />);
    });

    // it('Should do render a RoundCard for each round passed down through props.rounds', () => {

    // });
});