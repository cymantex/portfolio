import Request from "./Request";
import {Request as Req, Response} from "express";
import {Sequelize} from "sequelize-typescript";
import Validator, {ValidationSchema} from "../utils/Validator";
import {validateGrecaptcha} from "../utils/validateGrecaptcha";
import Emailer from "../utils/Emailer";

interface ContactForm {
    name: string,
    email: string,
    subject: string,
    message: string
}

export default class ContactRequest extends Request {
    constructor(req: Req, res: Response, sequelize: Sequelize) {
        super(req, res, sequelize);
    }

    async handlePost() {
        const validationSchema = ContactRequest.getValidationSchema(this.req.body);
        const validator = new Validator(validationSchema).validate();

        if(validator.hasErrors()){
            return this.responseHandler.sendBadRequest(validator.getErrors());
        }

        return validateGrecaptcha(this.req)
            .then(() => new Emailer(this.req).sendContactFormMail())
            .then(() => this.responseHandler.sendSuccess())
            .catch(err => this.responseHandler.sendBadRequest(err));
    }

    static getValidationSchema(contactForm: ContactForm): ValidationSchema[] {
        return [{
            name: "name",
            value: contactForm.name,
            required: true,
            maxLength: 50
        }, {
            name: "email",
            value: contactForm.email,
            required: true,
            isEmail: true,
            maxLength: 255
        }, {
            name: "subject",
            value: contactForm.subject,
            required: true,
            maxLength: 255
        }, {
            name: "message",
            value: contactForm.message,
            required: true,
            maxLength: 9000,
            maxLengthMessage: "Sorry, the message cannot have a power level over 9000."
        }];
    }
}