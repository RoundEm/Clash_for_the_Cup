import React from 'react';
import {shallow, mount} from 'enzyme';

import PlayersRender from '../components/PlayersRender';

describe('<PlayersRender />', () => {
    it('Renders without crashing', () => {
        shallow(<PlayersRender />);
    });

    // it('Should set players state when props.players is passed in', () => {

    // });

    // it('renders a list item for each player in players state array', () => {
        
    // });
});