import axios from "axios";
import {Request} from "express";

export const validateGrecaptcha = (req: Request) => {
    const secretKey = (process.env.GRECAPTCHA_SECRET)
        ? process.env.GRECAPTCHA_SECRET
        : require("../secret").default.GRECAPTCHA_SECRET;
    const secret = `secret=${secretKey}`;
    const response = `response=${req.body.grecaptcha}`;
    const remoteip = `remoteip=${req.ip}`;
    const options = `?${secret}&${response}&${remoteip}`;

    return axios
        .post(`https://www.google.com/recaptcha/api/siteverify${options}`)
        .then(response => response.data)
        .then(validation => {
            if(!validation.success){
                throw new Error("ReCAPTCHA validation failed");
            }
        });
};