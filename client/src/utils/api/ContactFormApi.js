import axios from "axios";

export default class ContactFormApi {
    static post = async (contactForm) =>
        axios.post("/api/contact", {
            ...contactForm,
            grecaptcha: window.grecaptcha.getResponse()
        });
}