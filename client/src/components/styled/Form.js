import React from "react";
import {Columns} from "./Columns";
import {classNames, getOptionalClasses, filterOutOptionalClasses} from "../../utils/className";

const Form = ({className, children, ...props}) => (
    <form className={classNames({"form": true, ...getOptionalClasses(props)}, className)}
          {...filterOutOptionalClasses(props)}
    >{children}</form>
);

Form.Columns = ({children, ...props}) => {
    let columns = [];
    let columnChildren = [];

    React.Children.forEach(children, (child, i) => {
        if(child.props.className && child.props.className.includes("column")){
            columns.push(child);
        } else {
            columnChildren.push(child);

            if(child.type !== "label"){
                columns.push(React.createElement("div", {
                    className: "column",
                    size: child.props.size,
                    key: i
                }, columnChildren));
                columnChildren = [];
            }
        }
    });

    return (
        <Columns {...props}>
            {columns}
        </Columns>
    );
};

Form.Columns.displayName = "Form.Columns";

export default Form;