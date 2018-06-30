import React from 'react';
import {shallow, mount} from 'enzyme';

import CreateRound from '../components/CreateRound';

describe('<CreateRound />', () => {
    it('Renders without crashing', () => {
        shallow(<CreateRound />);
    });

    let seedPlayers = [];
    beforeAll(() => {
        for (let i = 0; i < 5; i++) {
            seedPlayers.push(i)
        }
    })
    it('can add players to round', () => {
        const wrapper = shallow(<CreateRound />)
        const instance = wrapper.instance();
        seedPlayers.forEach(instance.addPlayerToRound);
        expect(wrapper.state('playersAddedToRound').length).toEqual(seedPlayers.length);
    });

    // it('Should call handleInput method when any inputs are edited', () => {

    // });
    
});