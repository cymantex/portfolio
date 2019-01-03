import React from "react";
import {Typewriter} from "../../../components/styled/Typewriter";
import TypewriterAnimation from "../../../components/styled/TypewriterAnimation";
import {Section} from "./Section";

export const IntroView = ({children, ...props}) => (
    <Section id="intro" {...props}>
        <Typewriter>
            <h1>
                <TypewriterAnimation
                    text="Greetings, I'm Simon Eriksson"
                    animation="bounceIn"
                    typingSpeed={75}
                />
            </h1>
            <p>
                <TypewriterAnimation
                    text="Full Stack Developer specializing in React.js and Node.js"
                    animation="bounceIn"
                    typingSpeed={32}
                />
            </p>
        </Typewriter>
        {children}
    </Section>
);