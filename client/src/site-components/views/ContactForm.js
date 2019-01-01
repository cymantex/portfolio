import React from "react";
import Form from "../../components/styled/Form";
import {Button} from "../../components/styled/Button";
import RecaptchaWidget from "../../components/RecaptchaWidget";
import {useInputs} from "../hooks/useInputs";

export const ContactForm = ({onSubmit, validation, ...props}) => {
    const inputs = useInputs(["name", "email", "subject", "message"]);

    const focusOnEnter = (event, fieldName) => {
        if(event.key === "Enter"){
            event.preventDefault();
            inputs.refs[fieldName].focus();
        }
    };

    return (
        <Form wrapper={4} className="w-100" {...props}>
            <Form.Columns>
                <input
                    type="text"
                    className="input"
                    placeholder="Name"
                    onKeyPress={(event) => focusOnEnter(event, "email")}
                    {...inputs.name}
                />
                <input
                    type="text"
                    className="input"
                    placeholder="Email"
                    onKeyPress={(event) => focusOnEnter(event, "subject")}
                    {...inputs.email}
                />
            </Form.Columns>
            <input
                type="text"
                className="input"
                placeholder="Subject"
                onKeyPress={(event) => focusOnEnter(event, "message")}
                {...inputs.subject}
            />
            <textarea
                rows={6}
                className="input"
                placeholder="Message"
                {...inputs.message}
            />
            <RecaptchaWidget
                siteKey="6LeN6YUUAAAAAMbSolGNWqSamZ-UXZ0KqJPTRy8Y"
            />
            <Button
                dark
                className="b-secondary mt-15"
                onClick={(event) => {
                    event.preventDefault();
                    onSubmit(inputs.values);
                }}
            >Submit</Button>
        </Form>
    );
};