import React from "react";
import classnames from "classnames";
import TypewriterAnimation from "../../components/TypewriterAnimation";
import HidingMenu from "../../components/HidingMenu";
import {Typewriter} from "../../components/Typewriter";

export const Header = ({className = "", children, ...props}) => (
    <header id="header" className={classnames("hero h-100", className)} {...props}>
        <HidingMenu id="main-menu">
            <a href="#cv">Home</a>
            <a href="#cv">CV</a>
            <a href="#projects">Projects</a>
            <a href="#repositories">Repositories</a>
            <a href="#reviews">Testimonials</a>
            <a href="#reviews">Skills</a>
            <a href="#reviews">Contact</a>
        </HidingMenu>
        <Typewriter>
            <h1>
                <TypewriterAnimation
                    text="Simon Eriksson"
                    typingSpeed={75}
                />
            </h1>
            <p>
                <TypewriterAnimation
                    text="Full Stack Developer specializing in React.js and Node.js"
                    typingSpeed={32}
                />
            </p>
        </Typewriter>
        {children}
    </header>
);