
import React from "react";
import { configure, shallow, } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import Accordian from '../accordion.js';
import { FALSE } from "node-sass";

describe('Accordian Test Cases', () => {
    let wrapper;
    let props;
    beforeEach(() => {
        props = {
            title: 'title', view: 'view', id: '1', open: false

        }
        wrapper = shallow(<Accordian {...props} />);
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should verify that component exists', () => {
        expect(wrapper.exists()).toEqual(true);
    });
    it('should verify View toggle on toggleOption funtion calls', () => {
        const open = wrapper.state('open');
        wrapper.instance().toggleOption();
        expect(wrapper.state('open')).toBe(!open)
    });
    it('should verify toggleOption called on handleClick fn call', () => {
        const toggleOption = jest.spyOn(wrapper.instance(), 'toggleOption').mockImplementationOnce();
        wrapper.instance().handleClick();
        expect(toggleOption).toHaveBeenCalled();
    });
    it('should verify clickHandler is called for controlled accordion', () => {
        const clickHandler = jest.fn();
        wrapper.setProps({ controlled: true, clickHandler });
        wrapper.instance().handleClick();
        expect(clickHandler).toHaveBeenCalled();
        // change state on props change for controlled
        wrapper.setProps({ open: true});
    });
    it('should verify Accordian.Title redered', () => {
        const titleProps = {
            open: true,
             onClick : () =>{}
        }
        const Title = shallow(<Accordian.Title {...titleProps} >title</Accordian.Title>);
        expect(Title.exists()).toEqual(true);
    });
    it('should verify Accordian.View redered', () => {
        const View = shallow(<Accordian.View  >View</Accordian.View>);
        expect(View.exists()).toEqual(true);
    });
    it('should verify Accordian.Title redered', () => {
        const Item = shallow(<Accordian.Item >Item</Accordian.Item>);
        expect(Item.exists()).toEqual(true);
    });
});

