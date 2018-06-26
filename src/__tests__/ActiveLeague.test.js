import React from 'react';
import {shallow, mount} from 'enzyme';

import ActiveLeague from '../components/ActiveLeague';

describe('<ActiveLeague />', () => {
    it('Renders without crashing', () => {
        shallow(<ActiveLeague />);
    });

    // TODO: not sure what to test on this decodeURIComponent
    // it('Should ')
});

