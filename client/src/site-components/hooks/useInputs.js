import {useState} from "react";
import classNames from "classnames";

export const addInputClass = (inputs, validation) => {
    return Object
        .keys(inputs)
        .map(inputName => ({
            [inputName]: {
                ...inputs[inputName],
                disabled: validation.loading || validation.completedAction,
                className: classNames({
                    "input": true,
                    "error": validation.errors[inputName] && !validation.loading,
                    "disabled": validation.loading || validation.completedAction
                })
            }
        }))
        .reduce((inputs, input) => ({...inputs, ...input}));
};

export const focusOnEnter = (inputs, focusMap) => {
    const focusOnEnterPressed = (event, inputName) => {
        if(event.key === "Enter"){
            event.preventDefault();
            inputs.refs[inputName].focus();
        }
    };

    return Object.keys(inputs).map(inputName =>
        (focusMap[inputName])
            ? ({[inputName]: {
                ...inputs[inputName],
                onKeyPress: (event) => focusOnEnterPressed(event, focusMap[inputName])
            }})
            : ({[inputName]: inputs[inputName]})
    ).reduce((inputs, input) => ({...inputs, ...input}));
};

export const useInputs = (fields = []) => {
    const refs = {};
    const values = {};

    let inputs = fields.map(field => {
        const [value, setValue] = useState("");
        values[field] = value;

        return {
            [field]: {
                value,
                onChange: (event) => setValue(event.target.value),
                ref: (ref) => {refs[field] = ref}
            }
        };
    }).reduce((inputs, input) => ({...inputs, ...input}));

    return {...inputs, values, refs};
};