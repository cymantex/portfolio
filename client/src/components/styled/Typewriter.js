import React from "react";

export const Typewriter = ({delay = 500, children}) => {
    let delays = [delay];
    let typingspeeds = [];

    React.Children.forEach(children, (child) => {
        const {text, typingSpeed} = child.props.children.props;
        typingspeeds.push(text.length * typingSpeed);
        const totalDelay = typingspeeds.reduce((acc, val) => acc + val);
        delays.push(totalDelay);
    });

    return React.Children.map(children, (textNode, i) => {
        const animation = textNode.props.children;
        return {
            ...textNode,
            props: {
                ...textNode.props,
                children: {
                    ...animation,
                    props: {
                        ...animation.props,
                        delay: delays[i]
                    }
                }
            }
        };
    });
};