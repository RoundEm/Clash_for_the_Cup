import React from 'react';
import {shallow, mount} from 'enzyme';

import Dashboard from '../components/Dashboard';

describe('<Dashboard />', () => {
    it('Renders without crashing', () => {
        shallow(<Dashboard />);
    });

    // it('Should render LeagueCard with className of .info-card for each league in leagues state', () => {
        
    // });
});