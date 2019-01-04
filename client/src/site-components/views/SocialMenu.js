import React from "react";
import {FreelancerIcon} from "./FreelancerIcon";

export const SocialMenu = () => {
    return (
        <nav className="social-menu">
            <a target="_blank"
               className="svg-link"
               href="https://www.freelancer.com/u/smnrkssn"
               rel="noopener noreferrer"
            ><FreelancerIcon/></a>
            <a target="_blank"
               href="https://www.facebook.com/simon.eriksson.79677"
               rel="noopener noreferrer"
            ><i className="fab fa-facebook"/></a>
            <a target="_blank"
               href="https://www.linkedin.com/in/simon-eriksson-b67415145/"
               rel="noopener noreferrer"
            ><i className="fab fa-linkedin"/></a>
        </nav>
    );
};