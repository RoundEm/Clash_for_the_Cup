import React from 'react';
import {shallow, mount} from 'enzyme';

import PlayersRound from '../components/PlayersRound';

describe('<PlayersRound />', () => {
    it('Renders without crashing', () => {
        shallow(<PlayersRound />);
    });

    // it('Should do something with roundDate props', () => {

    // });

    // it('Should render a list of players equal to the number of players in playersAddedToRound', () => {

    // });
});