import React from 'react';
import {shallow, mount} from 'enzyme';

import CreateLeague from '../components/CreateLeague';

describe('<CreateLeague />', () => {
    it('Renders without crashing', () => {
        shallow(<CreateLeague />);
    });
});