import React from 'react';
import {shallow, mount} from 'enzyme';

import Standings from '../components/Standings';

describe('<Standings />', () => {
    it('Renders without crashing', () => {
        shallow(<Standings />);
    });
});