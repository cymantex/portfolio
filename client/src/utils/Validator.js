export default class Validator {
    constructor(schema){
        this.fields = schema;
        this.errors = [];
    }

    validate(){
        return this
            .checkRequired()
            .checkIfEmail()
            .checkMaxLength()
            .getErrors();
    }

    checkRequired(){
        this.fields
            .filter(field => !field.hasError)
            .filter(field => field.required)
            .filter(field => !field.value)
            .forEach(field => {
                this.errors.push((field.requiredMessage)
                    ? field.requiredMessage
                    : `The ${field.name} field is required`);
                field.hasError = true;
            });

        return this;
    }

    checkIfEmail(){
        const looksLikeEmail = /\S+@\S+\.\S+/g;

        this.fields
            .filter(field => !field.hasError)
            .filter(field => field.isEmail)
            .filter(field => !looksLikeEmail.test(field.value))
            .forEach(field => {
                this.errors.push(
                    (field.emailMessage)
                        ? field.emailMessage
                        : `Please provide a valid email address.`
                );
                field.hasError = true;
            });

        return this;
    }

    checkMaxLength(){
        this.fields
            .filter(field => field.maxLength)
            .filter(field => field.value.length > field.maxLength)
            .forEach(field => {
                this.errors.push((field.maxLengthMessage)
                    ? field.maxLengthMessage
                    : (`The ${field.name} field can have a maximum of ${field.maxLength} ` +
                        `characters, you have entered ${field.value.length}.`)
                );
                field.hasError = true;
            });

        return this;
    }

    getErrors = () => {
        return this.errors;
    };
}