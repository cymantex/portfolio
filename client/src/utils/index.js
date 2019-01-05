import React from "react";
import {bindActionCreators} from "redux";

export const childrenWithProps = ({children, ...props}) => {
    return React.Children.map(children, (child) => React.cloneElement(child, props), null);
};

export const bindDispatchToActionCreators = (getActionCreators) => {
    return (dispatch, props) => bindActionCreators(getActionCreators(props), dispatch);
};

export const getLanguageIcon = (language) => {
    const languageIcons = ["php", "javascript", "typescript", "java", "css"];

    return languageIcons.includes(language.toLowerCase())
        ?  `/images/${language.toLowerCase()}-icon.jpg`
        : "/images/code-icon.jpg";
};