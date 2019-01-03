import React from "react";
import {Loader} from "../../../components/styled/Loader";
import {Animation} from "../../../components/styled/Animation";

export const Section = ({animationProps = {}, id, children, props}) => (
    <Animation animation="fadeIn" duration={2000} {...animationProps}>
        <section id={id} {...props}>
            {children}
        </section>
    </Animation>
);

Section.Loader = ({children, ...props}) => (
    <div className="section-loader" {...props}>
        <Loader inverted/>
        {children}
    </div>
);