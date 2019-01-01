import {useState} from "react";

export const useInputs = (fields = []) => {
    const refs = {};

    let inputs = fields.map(field => {
        const [value, setValue] = useState("");
        return {
            [field]: {
                value,
                onChange: (event) => setValue(event.target.value),
                ref: (ref) => {refs[field] = ref}
            }
        };
    }).reduce((acc, next) => ({...acc, ...next}));

    return {
        ...inputs,
        values: Object
            .keys(inputs)
            .map(inputName => ({
                [inputName]: inputs[inputName].value
            }))
            .reduce((acc, next) => ({...acc, ...next})),
        refs
    };
};