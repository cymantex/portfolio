import Validator from "../../utils/Validator";

describe("Validator.js", () => {
    it("Should add error when required field is empty", () => {
        const validator = new Validator([{name: "foo", value: "", required: true}]).validate();
        expect(validator.hasErrors()).toBeTruthy();
    });

    it("Should create one error for each field containing an error", () => {
        const validator = new Validator([
            {name: "foo", value: "", required: true},
            {name: "bar", value: "", required: true}
        ]).validate();
        expect(Object.keys(validator.getErrors()).length).toBe(2);
    });

    it("Should not add error when optional field is empty", () => {
        const validator = new Validator([{name: "foo", value: ""}]).validate();
        expect(validator.hasErrors()).toBeFalsy();
    });

    it("Should not add error when required field has a value", () => {
        const validator = new Validator([{name: "foo", value: "test"}]).validate();
        expect(validator.hasErrors()).toBeFalsy();
    });

    it("Should add error if given max length is exceeded", () => {
        const validator = new Validator([{
            name: "foo",
            value: "test",
            maxLength: 2
        }]).validate();
        expect(validator.hasErrors()).toBeTruthy();
    });

    it("Should add error if field is clearly not an email", () => {
        const validator = new Validator([{
            name: "foo",
            value: "test",
            isEmail: true
        }]).validate();
        expect(validator.hasErrors()).toBeTruthy();
    });

    it("Should not add error when field looks like an email", () => {
        const validator = new Validator([{
            name: "foo",
            value: "test@example.com",
            isEmail: true
        }]).validate();
        expect(validator.hasErrors()).toBeFalsy();
    });
});