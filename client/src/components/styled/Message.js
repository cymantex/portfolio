import React from "react";
import {classNames, filterOutOptionalClasses, getOptionalClasses} from "../../utils/className";

export const Message = ({
    message = true,
    heading,
    list = [],
    children,
    className,
    ...props
}) => {
    const messageClass = classNames({
        ...getOptionalClasses(props),
        "message": message
    }, className);

    const headingClass = classNames({
        "heading": true,
        "mb-0": list.length === 0 && React.Children.count(children) === 0,
        "mb-5": list.length > 0 || React.Children.count(children) > 0,
    });

    return (
        <div className={messageClass} {...filterOutOptionalClasses(props)}>
            {(heading) && (<h4 className={headingClass}>{heading}</h4>)}
            {(list.length > 0) && (
                <ul className="mb-5">
                    {list.map((listItem, i) => <li key={i}>{listItem}</li>)}
                </ul>
            )}
            {children}
        </div>
    );
};