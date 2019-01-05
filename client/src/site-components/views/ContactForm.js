import React, {Fragment} from "react";
import Form from "../../components/styled/Form";
import {Button} from "../../components/styled/Button";
import RecaptchaWidget from "../../components/RecaptchaWidget";
import {useInputs, focusOnEnter, addInputClass} from "../../components/hooks/useInputs";
import {ValidationMessage} from "./Messages";
import {validationActions} from "../../utils/constants/validationActions";

export const ContactForm = ({onSubmit, validation, ...props}) => {
    let inputs = useInputs(["name", "email", "subject", "message"]);
    inputs = focusOnEnter(inputs, {name: "email", email: "subject", subject: "message"});
    inputs = addInputClass(inputs, validation);

    return (
        <Fragment>
            <ValidationMessage
                successActions={[validationActions.contactForm]}
                successHeading="Your message has been sent"
                validation={validation}
            />
            <Form {...props}>
                <Form.Columns>
                    <input
                        type="text"
                        placeholder="Name"
                        {...inputs.name}
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        {...inputs.email}
                    />
                </Form.Columns>
                <input
                    type="text"
                    placeholder="Subject"
                    {...inputs.subject}
                />
                <textarea
                    rows={6}
                    placeholder="Message"
                    {...inputs.message}
                />
                <RecaptchaWidget
                    siteKey="6LeN6YUUAAAAAMbSolGNWqSamZ-UXZ0KqJPTRy8Y"
                />
                <Button
                    dark
                    className="primary mt-15"
                    disabled={validation.loading || validation.completedAction}
                    loading={validation.loading}
                    onClick={async (event) => {
                        event.preventDefault();
                        onSubmit(inputs.values);
                    }}
                >Submit</Button>
            </Form>
        </Fragment>
    );
};