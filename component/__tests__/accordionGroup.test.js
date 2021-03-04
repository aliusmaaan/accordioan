
import React from "react";
import { configure, shallow, } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import AccordionGroup from '../accordionGroup.js';
import { data } from './data'

describe('AccordionGroup Test Cases', () => {
    let wrapper;
    let props;
    beforeEach(() => {
        props = {
            data
        }
        wrapper = shallow(<AccordionGroup {...props} />);
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should verify that component exists', () => {
        expect(wrapper.exists()).toEqual(true);
    });

    it('should verify that Accordions render as data given', () => {
        expect(wrapper.find('Accordion').length).toBe(data.length)
    });

});
