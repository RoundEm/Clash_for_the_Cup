import React from 'react';
import {shallow, mount} from 'enzyme';

import PlayersRound from '../components/PlayersRound';

describe('<PlayersRound />', () => {
    it('Renders without crashing', () => {
        shallow(<PlayersRound />);
    });

    
});