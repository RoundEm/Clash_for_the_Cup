import React from 'react';
import {shallow, mount} from 'enzyme';

import PlayerSettings from '../components/PlayerSettings';

describe('<PlayerSettings />', () => {
    it('Renders without crashing', () => {
        shallow(<PlayerSettings />);
    });

    // it('Should set leagueId state when props.leagueId is passed in', () => {

    // });

    // it('Should call handleInput method when onChange event is triggered on input', () => {

    // })
});