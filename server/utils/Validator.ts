export interface ValidationSchema {
    value: string,
    name: string,
    required?: boolean,
    requiredMessage?: string,
    hasError?: boolean,
    isEmail?: boolean,
    emailMessage?: string,
    maxLength?: number,
    maxLengthMessage?: string
};

export default class Validator {
    fields: ValidationSchema[];
    errors: string[];

    constructor(schema: ValidationSchema[]){
        this.fields = schema;
        this.errors = [];
    }

    validate(): string[] {
        return this
            .checkRequired()
            .checkIfEmail()
            .checkMaxLength()
            .getErrors();
    }

    checkRequired(): Validator {
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

    checkIfEmail(): Validator {
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

    checkMaxLength(): Validator {
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

    getErrors = (): string[] => {
        return this.errors;
    };
}