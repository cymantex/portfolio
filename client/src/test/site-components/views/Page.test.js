import React from "react";
import {render} from "enzyme";
import {PageView} from "../../../site-components/views/Page";

describe("Page tests", () => {
    it("Should render without throwing errors", () => {
        render(<PageView/>);
    });

    it("Should add custom className", () => {
        const wrapper = render(<PageView className="foo"/>);
        expect(wrapper.find('.foo').length).toBe(1);
    });

    it("Should add other props", () => {
        const wrapper = render(<PageView id="foo"/>);
        expect(wrapper.find("#foo").length).toBe(1);
    });
});