import React from 'react';
import {shallow, mount} from 'enzyme';

import Footer from '../components/Footer';

describe('<Footer />', () => {
    it('Renders without crashing', () => {
        shallow(<Footer />);
    });
});