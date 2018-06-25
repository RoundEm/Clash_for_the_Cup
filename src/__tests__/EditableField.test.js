import React from 'react';
import {shallow, mount} from 'enzyme';

import EditableField from '../components/EditableField';

describe('<EditableField />', () => {
    it('Renders without crashing', () => {
        shallow(<EditableField />);
    });
});