import React from "react";
import HidingMenu from "../../components/styled/HidingMenu";
import {Link} from "react-router-dom";
import {routes} from "../../utils/constants/routes";

export const MainMenu = (props) => (
    <HidingMenu id="main-menu" {...props}>
        <Link to={routes.homePage}>Home</Link>
        <a href="#cv">CV</a>
        <Link to={routes.projectsPage}>Projects</Link>
        <Link to={routes.repositoriesPage}>Repositories</Link>
        <Link to={routes.reviewsPage}>Reviews</Link>
        <a href="#reviews">Skills</a>
        <Link to={routes.contactPage}>Contact</Link>
    </HidingMenu>
);