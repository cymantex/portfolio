export default class Validator {
    constructor(schema){
        this.fields = schema;
        this.errors = {};
    }

    validate(){
        return this
            .checkRequired()
            .checkIfEmail()
            .checkMaxLength();
    }

    checkRequired(){
        this.fields
            .filter(field => !this.errors[field.name])
            .filter(field => field.required)
            .filter(field => !field.value)
            .forEach(field => {
                this.addError({
                    field,
                    message: `The ${field.name} field is required.`,
                    errorType: "required"
                });
            });

        return this;
    }

    checkIfEmail(){
        const looksLikeEmail = /\S+@\S+\.\S+/g;

        this.fields
            .filter(field => !this.errors[field.name])
            .filter(field => field.isEmail)
            .filter(field => !looksLikeEmail.test(field.value))
            .forEach(field => {
                this.addError({
                    field,
                    message: `Please provide a valid email address.`,
                    errorType: "email"
                });
            });

        return this;
    }

    checkMaxLength(){
        this.fields
            .filter(field => !this.errors[field.name])
            .filter(field => field.maxLength)
            .filter(field => field.value.length > field.maxLength)
            .forEach(field => {
                this.addError({
                    field,
                    message: (
                        `The ${field.name} field can have a maximum of ${field.maxLength} ` +
                        `characters, you have entered ${field.value.length}.`
                    ),
                    errorType: "maxLength"
                });
            });

        return this;
    }

    hasErrors = () => {
        return Object.keys(this.errors).length > 0;
    };

    getErrors = () => {
        return this.errors;
    };

    addError = ({field, message, errorType}) => {
        if(this.errors[field.name]) return;

        this.errors[field.name] = (field[`${errorType}Message`])
            ? field[`${errorType}Message`]
            : message;
    }
}