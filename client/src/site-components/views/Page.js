import React from "react";

export const Page = ({children, ...props}) => (
    <section className="page wrapper-1" {...props}>
        {children}
    </section>
);