import React from "react";
import HidingMenu from "../../components/HidingMenu";

export const MainMenu = (props) => (
    <HidingMenu id="main-menu" {...props}>
        <a href="#cv">Home</a>
        <a href="#cv">CV</a>
        <a href="#projects">Projects</a>
        <a href="#repositories">Repositories</a>
        <a href="#reviews">Testimonials</a>
        <a href="#reviews">Skills</a>
        <a href="#reviews">Contact</a>
    </HidingMenu>
);