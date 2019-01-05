import React from "react";
import {mount} from "enzyme";
import ContactFormApi from "../../../utils/api/ContactFormApi";
import {configureEnzyme} from "../../test-utils";
import ContactFormController from "../../../site-components/controllers/ContactFormController";
import {ContactForm} from "../../../site-components/views/ContactForm";
configureEnzyme();

jest.mock("../../../utils/api/ContactFormApi");
ContactFormApi.post.mockResolvedValue({foo: "foo"});
window.grecaptcha = {getResponse: () => "ok"};

describe("ContactFormController", () => {
    let wrapper;

    it("Mounts without crashing", () => {
        wrapper = mount(
            <ContactFormController>
                <ContactForm/>
            </ContactFormController>
        );
    });

    it("Passes down validation state and onSubmit", () => {
        const childProps = wrapper.childAt(0).childAt(0).props();
        expect(childProps.validation).toBeDefined();
        expect(childProps.onSubmit).toBeDefined();
    });

    describe("Validation", () => {
        it("Should add an error for each undefined required field", () => {
            const contactFormController = wrapper.childAt(0).instance();
            contactFormController.handleSubmit({});
            const errors = contactFormController.props.validation.state.errors;
            expect(Object.keys(errors).length).toBe(4);
        });

        it("Should not allow incorrect looking email", () => {
            const contactFormController = wrapper.childAt(0).instance();
            contactFormController.handleSubmit({email: "foo"});
            const errors = contactFormController.props.validation.state.errors;
            expect(errors.email).toBeDefined();
        });

        it("Should allow correct looking email", () => {
            const contactFormController = wrapper.childAt(0).instance();
            contactFormController.handleSubmit({email: "foo@example.com"});
            const errors = contactFormController.props.validation.state.errors;
            expect(errors.email).toBeUndefined();
        });

        it("Should not allow unreasonably long values", () => {
            const contactFormController = wrapper.childAt(0).instance();
            contactFormController.handleSubmit({
                name: "foo".repeat(10000),
                email: "foo@example.com" + "foo".repeat(10000),
                subject: "foo".repeat(10000),
                message: "foo".repeat(10000)
            });
            const errors = contactFormController.props.validation.state.errors;
            expect(Object.keys(errors).length).toBe(4);
        });

        it("Should not add errors with valid input", () => {
            const contactFormController = wrapper.childAt(0).instance();
            contactFormController.handleSubmit({
                name: "foo",
                email: "foo@example.com",
                subject: "foo",
                message: "foo"
            });
            const errors = contactFormController.props.validation.state.errors;
            expect(Object.keys(errors).length).toBe(0);
        });
    });

    afterAll(() => wrapper.unmount());
});