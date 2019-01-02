import React from "react";
import HidingMenu from "../../components/styled/HidingMenu";
import {Link} from "react-router-dom";
import {routes} from "../../utils/constants/routes";

export const MainMenu = (props) => (
    <HidingMenu id="main-menu" {...props}>
        <Link to={routes.homePage}>Home</Link>
        <a href="#cv">CV</a>
        <a href="#projects">Projects</a>
        <Link to={routes.repositoriesPage}>Repositories</Link>
        <a href="#reviews">Testimonials</a>
        <a href="#reviews">Skills</a>
        <Link to={routes.contactPage}>Contact</Link>
    </HidingMenu>
);