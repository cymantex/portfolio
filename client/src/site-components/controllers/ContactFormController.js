import {Component} from "react";
import {childrenWithProps} from "../../utils";
import withValidation from "../../components/hocs/withValidation";
import Validator from "../../utils/Validator";
import ContactFormApi from "../../utils/api/ContactFormApi";
import {validationActions} from "../../utils/constants/validationActions";

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

        const validator = new Validator(validationSchema).validate();

        if(validator.hasErrors()){
            this.props.validation.setErrorState(validator.getErrors());
            return false;
        }

        return true;
    };

    componentDidMount(){
        if(!window.grecaptcha){
            this.props
                .validation
                .setErrorState({grecaptcha: "Failed to load grecaptcha"});
        }
    }

    handleSubmit = async (contactForm) => {
        if(!window.grecaptcha){
            this.props.validation.setErrorState({grecaptcha: "Failed to load grecaptcha"});
        }

        this.props.validation.setLoadingState();

        if(this.formIsValid(contactForm)){
            return ContactFormApi
                .post(contactForm)
                .then((res) => {
                    console.log(res);
                    this.props.validation.setCompletedActionState({
                        completedAction: validationActions.contactForm
                    });
                })
                .catch(err => {
                    console.table(err);
                    window.grecaptcha.reset();
                    this.props.validation.setErrorState(err.response.data);
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