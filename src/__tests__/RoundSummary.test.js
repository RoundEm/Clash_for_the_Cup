import React from 'react';
import {shallow, mount} from 'enzyme';

import RoundSummary from '../components/RoundSummary';

const leagueIdData = 123456;
const playersData = [
    {_id: 1},
    {_id: 2},
    {_id: 3},
    {_id: 4}
];
const roundData = [
    {
        course: 'Augusta', 
        name: 'The Masters', 
        date: new Date(),
        players: [
            {id: 1, name: 'Dustin Johnson'}, 
            {id: 2, name: 'Jason Day'}, 
            {id: 3, name: 'Tony Finau'}, 
            {id: 4, name: 'Brooks Koepka'}
        ]
    },
    {
        course: 'Carnoustie', 
        name: 'The Open',
        date: new Date(),
        players: [
            {id: 1, name: 'Dustin Johnson'}, 
            {id: 2, name: 'Jason Roundtree'}, 
            {id: 3, name: 'Tony Finau'}, 
            {id: 4, name: 'Brooks Koepka'}
        ]
    },
    {
        course: 'Bellerive', 
        name: 'PGA Championship',
        date: new Date(),
        players: [
            {id: 1, name: 'Dustin Johnson'}, 
            {id: 2, name: 'Jason Day'}, 
            {id: 3, name: 'Tiger Woods'}, 
            {id: 4, name: 'Brooks Koepka'}
        ]
    }
];

describe('<RoundSummary />', () => {
    it('Renders without crashing', () => {
        shallow(<RoundSummary 
            players={playersData} 
            league={leagueIdData} 
            rounds={roundData}  
        />);
    });
});