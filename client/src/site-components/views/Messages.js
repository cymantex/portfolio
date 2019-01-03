import React from "react";
import {Message} from "../../components/styled/Message";

export const ValidationMessage = ({
    successActions = [],
    errorHeading = "The following issues was detected:",
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

export const ApiErrorMessage = (props) => (
    <Message
        className="danger mb-15 wrapper-5"
        heading="Failed to fetch resources from external API."
        list={["Try again later"]}
        {...props}
    />
);