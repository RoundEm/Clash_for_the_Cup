import React from 'react';
import {shallow, mount} from 'enzyme';

import App from '../components/App';

describe('<App />', () => {
    it('Renders without crashing', () => {
        shallow(<App />);
    });

    // TODO: not sure what to test on this decodeURIComponent
    // it('Should render the Navigatigation component', () => {
    //     const wrapper = render(<Navigation />);
    //     expect(wrapper)
    // });
});