import React from "react";
import Form from "../../components/styled/Form";
import {Button} from "../../components/styled/Button";
import RecaptchaWidget from "../../components/RecaptchaWidget";

export const ContactForm = ({onSubmit, validation, ...props}) => {
    let form = {};
    //TODO: Use react hooks.

    return (
        <Form wrapper={4} className="w-100" {...props}>
            <Form.Columns>
                <input
                    type="text"
                    className="input"
                    placeholder="Name"
                    ref={(name) => {form.name = name}}
                />
                <input
                    type="text"
                    className="input"
                    placeholder="Email"
                    ref={(email) => {form.email = email}}
                />
            </Form.Columns>
            <input
                type="text"
                className="input"
                placeholder="Subject"
                ref={(subject) => {form.subject = subject}}
            />
            <textarea
                rows={6}
                className="input"
                placeholder="Message"
                ref={(message) => {form.message = message;}}
            />
            <RecaptchaWidget
                siteKey="6LeN6YUUAAAAAMbSolGNWqSamZ-UXZ0KqJPTRy8Y"
            />
            <Button
                dark
                className="b-secondary mt-15"
                onClick={(event) => {
                    event.preventDefault();
                    onSubmit({
                        name: form.name.value,
                        email: form.email.value,
                        subject: form.subject.value,
                        message: form.message.value
                    });
                }}
            >Submit</Button>
        </Form>
    );
};