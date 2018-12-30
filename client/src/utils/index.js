import React from "react";
import {bindActionCreators} from "redux";
import _ from "lodash";

export const childrenWithProps = ({children, ...props}) => {
    return React.Children.map(children, (child) => React.cloneElement(child, props), null);
};

export const bindDispatchToActionCreators = (getActionCreators) => {
    return (dispatch, props) => bindActionCreators(getActionCreators(props), dispatch);
};

export const camelCaseKeys = (object = {}) => {
    return {
        ...Object
            .keys(object)
            .map(key => ({[_.camelCase(key)]: object[key]}))
            .reduce((acc, obj) => ({...acc, ...obj}))
    }
};