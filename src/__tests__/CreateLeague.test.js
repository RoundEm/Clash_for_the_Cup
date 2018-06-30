import React from 'react';
import {shallow, mount} from 'enzyme';

import CreateLeague from '../components/CreateLeague';

describe('<CreateLeague />', () => {
    it('Renders without crashing', () => {
        shallow(<CreateLeague />);
    });

    // it('Should render a button with a className of .done', () => {
        
    // })

    // it('Should set the state of leagueId when handleBasicSave method is called with parameter', () => {

    // })
});