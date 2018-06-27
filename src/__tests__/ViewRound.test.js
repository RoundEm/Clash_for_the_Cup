import React from 'react';
import {shallow, mount} from 'enzyme';

import ViewRound from '../components/ViewRound';

describe('<ViewRound />', () => {
    it('Renders without crashing', () => {
        shallow(<ViewRound />);
    });

    // it('Should set pointsInput state when input onChange is triggered', () => {

    // });

    // it('Should render a <tr> element for each item in pointDefinitions state', () => {

    // });
});