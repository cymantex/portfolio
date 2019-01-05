import "../serverTest";
import {expect} from "chai";
import {routes} from "../../utils/constants/routes";
import request, {Response} from "supertest";
import {httpCodes} from "../../utils/constants/httpCodes";

const checkBadRequest = (response: Response) => {
    console.error(response.text);
    expect(response.status).to.be.equal(httpCodes.BAD_REQUEST);
};

describe("Routes", function(){
    it("Should not allow empty fields", () => {
        return request(global.app)
            .post(routes.contact)
            .send({})
            .then(response => response.body)
            .then(errors => {
                expect(errors).to.have.ownProperty("name");
                expect(errors).to.have.ownProperty("email");
                expect(errors).to.have.ownProperty("subject");
                expect(errors).to.have.ownProperty("message");
            });
    });

    it("Should not allow insanely long strings", () => {
        return request(global.app)
            .post(routes.contact)
            .send({
                name: "s".repeat(10000),
                email: "foo@example.com" + "m".repeat(10000),
                subject: "s".repeat(10000),
                message: "s".repeat(10000)
            })
            .then(response => response.body)
            .then(errors => {
                expect(errors).to.have.ownProperty("name");
                expect(errors).to.have.ownProperty("email");
                expect(errors).to.have.ownProperty("subject");
                expect(errors).to.have.ownProperty("message");
            });
    });

    it("Should not allow incorrect email", () => {
        return request(global.app)
            .post(routes.contact)
            .send({email: "foo"})
            .then(response => response.body)
            .then(errors => {
                expect(errors).to.have.ownProperty("email");
            });
    });

    it("Should not allow string looking like email", () => {
        return request(global.app)
            .post(routes.contact)
            .send({email: "foo@example.com"})
            .then(response => response.body)
            .then(errors => {
                expect(errors).to.not.have.ownProperty("email");
            });
    });

    it("Should require ReCAPTCHA", () => {
        return request(global.app)
            .post(routes.contact)
            .send({
                name: "foo",
                email: "foo@example.com",
                subject: "foo",
                message: "foo"
            })
            .then(checkBadRequest)
    });
});