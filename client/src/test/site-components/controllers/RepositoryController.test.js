import React from "react";
import {mount} from "enzyme";
import RepositoryController from "../../../site-components/controllers/RepositoryController";
import {RepositoryView} from "../../../site-components/views/sections/RepositoryView";
import axios from "axios";
import {configureEnzyme} from "../../test-utils";
import GithubApi from "../../../utils/api/GithubApi";
configureEnzyme();

jest.mock("axios");
axios.get.mockResolvedValue({data: []});

describe("RepositoryController", () => {
    let wrapper = null;

    it("Mounts without crashing", () => {
        wrapper = mount(
            <RepositoryController>
                <RepositoryView/>
            </RepositoryController>
        );
    });

    it("Mounts with empty array repositories", () => {
        expect(wrapper.childAt(0).props().repositories.length).toBe(0);
    });

    it("Mounts without an apiError", () => {
        expect(wrapper.childAt(0).instance().props.apiError).toBeFalsy();
    });

    it("Calls github api after mounting", () => {
        expect(axios.get).toBeCalledWith(GithubApi.repositories, {});
    });

    afterAll(() => wrapper.unmount())
});