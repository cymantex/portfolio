import React from "react";

export const PageView = ({children, ...props}) => (
    <main {...props}>
        {children}
    </main>
);