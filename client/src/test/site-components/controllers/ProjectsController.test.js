import React from "react";
import {mount} from "enzyme";
import ProjectsController from "../../../site-components/controllers/ProjectsController";
import {ProjectsView} from "../../../site-components/views/sections/ProjectsView";
import axios from "axios";
import {configureEnzyme} from "../../test-utils";
import FreelancerApi from "../../../utils/api/FreelancerApi";
configureEnzyme();

jest.mock("axios");
axios.get.mockResolvedValue({
    data: {
        result: {
            portfolios: []
        }
    }
});

describe("ProjectsController", () => {
    let wrapper = null;

    it("Mounts without crashing", () => {
        wrapper = mount(
            <ProjectsController>
                <ProjectsView/>
            </ProjectsController>
        );
    });

    it("Mounts with empty array projects", () => {
        expect(wrapper.childAt(0).props().projects.length).toBe(0);
    });

    it("Mounts without an apiError", () => {
        expect(wrapper.childAt(0).instance().props.apiError).toBeFalsy();
    });

    it("Calls freelancer api after mounting", () => {
        expect(axios.get).toBeCalledWith(FreelancerApi.portfolio, {});
    });

    afterAll(() => wrapper.unmount())
});