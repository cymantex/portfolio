import React from "react";
import {Message} from "../../components/styled/Message";

export const ValidationMessage = ({
    successActions = [],
    errorHeading = "Please fix the following:",
    successHeading = "The action completed successfully",
    validation,
    ...props
}) => {
    if(Object.keys(validation.errors).length > 0){
        return (
            <Message
                heading={errorHeading}
                className="danger mb-15"
                list={Object.values(validation.errors)}
                {...props}
            />
        );
    } else if(successActions.includes(validation.completedAction)){
        return (
            <Message
                className="success mb-15"
                heading={successHeading}
                {...props}
            />
        );
    }

    return null;
};