import React from "react";
import {classNames, getOptionalClasses, filterOutOptionalClasses} from "../../utils/className";

export const Columns = ({
    className,
    segment = false,
    unstackable = false,
    breakpoint,
    sizes = [],
    children,
    ...props
}) => {
    const filterOutColumnProps = ({columnClass, columnProps, ...props}) => props;

    const isColumn = (child) => {
        return child.props.className && child.props.className.includes("column");
    };

    const columnsClass = classNames({
        "columns": true,
        "breakpoint": breakpoint,
        "unstackable": unstackable,
        [breakpoint]: breakpoint,
        ...getOptionalClasses(props),
        "segment": segment
    }, className, breakpoint);

    const getColumnClass = (index, {columnClass, className = ""} = {}) => {
        let name = (className.includes("column")) ? className : "column";
        if(columnClass) return `${name} ${columnClass}`;
        return (typeof sizes[index] !== "number") ? name : `${name} span-${sizes[index]}`;
    };

    return (
        <div className={columnsClass} {...filterOutOptionalClasses(props)}>
            {React.Children
                .toArray(children)
                .filter(children => children)
                .map((child, i) => (
                    (isColumn(child))
                        ? React.cloneElement(child, {
                            className: getColumnClass(i, child.props)
                        })
                        : (
                            <div
                                key={i}
                                className={getColumnClass(i, child.props)}
                                {...child.props.columnProps}
                            >{React.cloneElement({
                                ...child,
                                ...{props: filterOutColumnProps(child.props)}
                            })}</div>
                        )
                ))}
        </div>
    );
};