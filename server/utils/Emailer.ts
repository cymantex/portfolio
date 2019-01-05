import {Request} from "express";
import nodemailer from "nodemailer";
import {getEnv} from "./index";
import Mail = require("nodemailer/lib/mailer");
import {Options} from "nodemailer/lib/smtp-transport";

export default class Emailer {
    req: Request;
    transport: Mail;

    constructor(req: Request){
        this.req = req;

        this.transport = nodemailer.createTransport(Emailer.getTransport());
    }

    private static getTransport(){
        const sendgridTransport = require("nodemailer-sendgrid-transport");

        return getEnv("SENDGRID_USERNAME")
            ? sendgridTransport({
                auth: {
                    api_user: getEnv("SENDGRID_USERNAME"),
                    api_key: getEnv("SENDGRID_PASSWORD")
                }
            })
            : getEnv("NODEMAILER_TRANSPORT")
    }

    private async sendMail(mailOptions: Options){
        return this.transport.sendMail(mailOptions);
    };

    async sendContactFormMail(){
        const {name, email, subject, message} = this.req.body;

        return this.sendMail({
            to: getEnv("SMNRKSSN_EMAIL"),
            from: email,
            subject: `[Portfolio] ${subject}`,
            html: (
                `<p>${message}</p>` +
                `<p>Regards,</p>` +
                `<p>${name}</p>`
            )
        });
    }
}