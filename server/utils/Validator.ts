export interface ValidationSchema {
    [key: string]: string | boolean | number,
    value: string,
    name: string,
    required?: boolean,
    requiredMessage?: string,
    hasError?: boolean,
    isEmail?: boolean,
    emailMessage?: string,
    maxLength?: number,
    maxLengthMessage?: string
}

export default class Validator {
    fields: ValidationSchema[];
    errors: {[fieldName: string]: string | boolean | number};

    constructor(schema: ValidationSchema[]){
        this.fields = schema;
        this.errors = {};
    }

    validate(): Validator {
        return this
            .checkRequired()
            .checkIfEmail()
            .checkMaxLength();
    }

    checkRequired(): Validator {
        this.fields
            .filter(field => !field.hasError)
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

    checkIfEmail(): Validator {
        const looksLikeEmail = /\S+@\S+\.\S+/g;

        this.fields
            .filter(field => !field.hasError)
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

    checkMaxLength(): Validator {
        this.fields
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

    hasErrors = (): boolean => {
        return Object.keys(this.errors).length > 0;
    };

    getErrors = (): object => {
        return this.errors;
    };

    private addError = ({
        field,
        message,
        errorType
    }: {
        field: ValidationSchema,
        message: string,
        errorType: string
    }) => {
        if(this.errors[field.name]) return;

        this.errors[field.name] = (field[`${errorType}Message`])
            ? field[`${errorType}Message`]
            : message;
    }
}