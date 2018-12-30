import React from "react";
import {classNames, getOptionalClasses, filterOutOptionalClasses} from "../utils/className";

export const Hero = ({
    segment = false,
    hero = true,
    className = "",
    children,
    ...props
}) => (
    <div className={classNames({
            ...getOptionalClasses(props),
            "segment": segment,
            "hero": hero
        }, className)}
        {...filterOutOptionalClasses(props)}
    >{children}</div>
);