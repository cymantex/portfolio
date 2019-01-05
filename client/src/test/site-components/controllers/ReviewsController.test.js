import React from "react";
import {mount} from "enzyme";
import ReviewsController from "../../../site-components/controllers/ReviewsController";
import {ReviewsView} from "../../../site-components/views/sections/ReviewsView";
import axios from "axios";
import {configureEnzyme} from "../../test-utils";
import FreelancerApi from "../../../utils/api/FreelancerApi";
configureEnzyme();

jest.mock("axios");
axios.get.mockResolvedValue({
    data: {
        result: {
            reviews: []
        }
    }
});

describe("ReviewsController", () => {
    let wrapper = null;

    it("Mounts without crashing", () => {
        wrapper = mount(
            <ReviewsController>
                <ReviewsView/>
            </ReviewsController>
        );
    });

    it("Mounts with empty array projectReviews and contestReviews", () => {
        expect(wrapper.childAt(0).props().projectReviews.length).toBe(0);
        expect(wrapper.childAt(0).props().contestReviews.length).toBe(0);
    });

    it("Mounts without an apiError", () => {
        expect(wrapper.childAt(0).instance().props.apiError).toBeFalsy();
    });

    it("Calls freelancer api after mounting", () => {
        expect(axios.get).toBeCalledWith(FreelancerApi.projectReviews, {});
        expect(axios.get).toBeCalledWith(FreelancerApi.contestReviews, {});
    });

    afterAll(() => wrapper.unmount())
});