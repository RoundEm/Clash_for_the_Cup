import React from 'react';
import {shallow, mount} from 'enzyme';

import Standings from '../components/Standings';

const playersData = [
    {id: 1, name: 'Dustin Johnson'},
    {id: 2, name: 'Jason Day'},
    {id: 3, name: 'Tony Finau'},
    {id: 4, name: 'Brooks Koepka'}
]
const pointTotalsData = [
    {id: 1, total: 200},
    {id: 2, total: 100},
    {id: 3, total: 150},
    {id: 4, total: -10}
]

describe('<Standings />', () => {
    it('Renders without crashing', () => {
        shallow(<Standings 
            players={playersData} 
            points={pointTotalsData}
        />);
    });
});