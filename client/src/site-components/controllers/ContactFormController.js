import {Component} from "react";
import {childrenWithProps} from "../../utils";
import withValidation from "../../components/hocs/withValidation";
import Validator from "../../utils/Validator";
import ContactFormApi from "../../utils/api/ContactFormApi";

class ContactFormController extends Component {
    formIsValid = (contactForm) => {
        const validationSchema = [{
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
        }, {
            name: "grecaptcha",
            value: window.grecaptcha.getResponse(),
            required: true,
            requiredMessage: "Please verify that you're not a robot."
        }];

        const errors = new Validator(validationSchema).validate();
        console.log(errors);

        if(errors.length > 0){
            this.props.validation.setErrorState(errors);
            return false;
        }

        return true;
    };

    handleSubmit = async (contactForm) => {
        if(this.formIsValid(contactForm)){
            return ContactFormApi
                .post(contactForm)
                .then(console.log)
                .catch(err => {
                    console.error(err.response.data);
                    window.grecaptcha.reset();
                });
        }
    };

    render(){
        const {children, validation, ...props} = this.props;

        return childrenWithProps({
            children,
            ...props,
            validation: validation.state,
            onSubmit: this.handleSubmit
        });
    }
}

export default withValidation(ContactFormController);