import React from 'react';
import {shallow, mount} from 'enzyme';

import Standings from '../components/Standings';

describe('<Standings />', () => {
    it('Renders without crashing', () => {
        shallow(<Standings />);
    });

    // it('Should do something with points props or players props', () => {

    // });
    
});