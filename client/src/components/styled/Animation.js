import React from "react";
import {classNames} from "../../utils/className";

export const Animation = ({
    animation = "fadeIn",
    className,
    span = false,
    duration = 1000,
    children,
    ...props
}) => {
    const animationClass = classNames({
        "animated": true,
        [animation]: true
    }, className);

    const style = {
        animationDuration: `${duration / 1000}s`
    };

    if(span){
        return <span className={animationClass} style={style} {...props}>{children}</span>;
    }

    return <div className={animationClass} style={style} {...props}>{children}</div>;
};