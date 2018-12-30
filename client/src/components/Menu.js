import React from "react";
import {classNames, getOptionalClasses, filterOutOptionalClasses} from "../utils/className";

export const Menu = ({
    className = "",
    vertical = false,
    right = false,
    center = false,
    fixed = false,
    children,
    ...props
}) => {
    const menuClass = classNames({
        "menu": true,
        "vertical": vertical,
        "right": right,
        "center": center,
        "fixed": fixed,
        ...getOptionalClasses(props)
    }, className);

    return (
        <nav className={menuClass} {...filterOutOptionalClasses(props)}>
            {children}
        </nav>
    );
};