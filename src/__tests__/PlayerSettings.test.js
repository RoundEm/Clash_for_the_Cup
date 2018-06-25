import React from 'react';
import {shallow, mount} from 'enzyme';

import PlayerSettings from '../components/PlayerSettings';

describe('<PlayerSettings />', () => {
    it('Renders without crashing', () => {
        shallow(<PlayerSettings />);
    });
});