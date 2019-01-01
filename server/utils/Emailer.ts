import {Request} from "express";
import nodemailer from "nodemailer";
import {getEnv} from "./index";
import Mail = require("nodemailer/lib/mailer");
import {Options} from "nodemailer/lib/smtp-transport";

export default class Emailer {
    req: Request;
    smtpTransport: Mail;

    constructor(req: Request){
        this.req = req;
        this.smtpTransport = nodemailer.createTransport(
            typeof getEnv("NODEMAILER_TRANSPORT") === "string"
                ? JSON.parse(getEnv("NODEMAILER_TRANSPORT"))
                : getEnv("NODEMAILER_TRANSPORT")
        );
    }

    private async sendMail(mailOptions: Options){
        return this.smtpTransport.sendMail(mailOptions);
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