import React from "react";
import {shallow} from "enzyme";
import {Page} from "../../../site-components/views/Page";
import {configureEnzyme} from "../../test-utils";
configureEnzyme();

describe("Page tests", () => {
    it("Should render without throwing errors", () => {
        shallow(<Page/>);
    });

    it("Should add custom className", () => {
        const wrapper = shallow(<Page className="foo"/>);
        expect(wrapper.find('.foo').length).toBe(1);
    });

    it("Should add other props", () => {
        const wrapper = shallow(<Page id="foo"/>);
        expect(wrapper.find("#foo").length).toBe(1);
    });
});