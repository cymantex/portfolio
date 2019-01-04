import React from "react";

export const Page = ({children, ...props}) => (
    <section className="page" {...props}>
        <div className="page-wrapper">
            {children}
        </div>
    </section>
);