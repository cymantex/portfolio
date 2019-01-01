import React from "react";
import {classNames, getOptionalClasses, filterOutOptionalClasses} from "../../utils/className";

export const Button = ({
    className,
    outlined = false,
    children,
    ...props
}) => {
    const buttonClass = classNames({
        "button": true,
        "outlined": outlined,
        ...getOptionalClasses(props)
    }, className);

    return (
        <button
            className={buttonClass}
            {...filterOutOptionalClasses(props)}
        >{children}</button>
    );
};