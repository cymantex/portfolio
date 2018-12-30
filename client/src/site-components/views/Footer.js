import React from "react";
import {Copyright} from "./Copyright";
import classnames from "classnames";

export const Footer = ({className = "", children, ...props}) => (
    <footer id="footer" className={classnames("hero secondary", className)} {...props}>
        {children}
        <Copyright/>
    </footer>
);