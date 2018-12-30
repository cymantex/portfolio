import React from "react";

export const SocialMenu = ({children, ...props}) => (
    <nav className="menu primary" {...props}>
        <i className="menu-item fab fa-linkedin-in"/>
        <i className="menu-item fab fa-github"/>
        <i className="menu-item fab fa-linkedin-in"/>
        {children}
    </nav>
);