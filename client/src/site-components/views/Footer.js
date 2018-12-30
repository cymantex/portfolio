import React from "react";
import {SocialMenu} from "./SocialMenu";
import {Copyright} from "./Copyright";

export const Footer = ({children, ...props}) => (
    <footer {...props}>
        {children}
        <SocialMenu/>
        <Copyright/>
    </footer>
);