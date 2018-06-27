import React from 'react';
import {shallow, mount} from 'enzyme';

import Home from '../components/Home';

describe('<Home />', () => {
    it('Renders without crashing', () => {
        shallow(<Home />);
    });

    // it('Should render two divs with classNames of .home-button', () => {

    // });
});