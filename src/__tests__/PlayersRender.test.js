import React from 'react';
import {shallow, mount} from 'enzyme';

import PlayersRender from '../components/PlayersRender';

describe('<PlayersRender />', () => {
    it('Renders without crashing', () => {
        shallow(<PlayersRender />);
    });

    // it('calls componentDidMount', () => {

    // });

    // it('renders players', () => {
        
    // });
});