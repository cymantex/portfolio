import React from "react";
import {FreelancerIcon} from "./FreelancerIcon";

export const SocialMenu = () => {
    return (
        <nav className="social-menu">
            <a target="_blank"
               title="My freelancer profile"
               className="svg-link"
               href="https://www.freelancer.com/u/smnrkssn"
               rel="noopener noreferrer"
            ><FreelancerIcon/></a>
            <a title="My Github profile"
               target="_blank"
               href="https://github.com/dv16sen"
               rel="noopener noreferrer"
            ><i className="fab fa-github"/></a>
            <a title="My linkedin profile"
               target="_blank"
               href="https://www.linkedin.com/in/simon-eriksson-b67415145/"
               rel="noopener noreferrer"
            ><i className="fab fa-linkedin"/></a>
        </nav>
    );
};