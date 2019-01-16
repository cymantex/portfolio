import React from "react";

export const LanguageIcon = ({language = "", ...props}) => {
    const languageIcons = {
        "php": "fab fa-php",
        "javascript": "fab fa-js",
        "typescript": "fab fa-js",
        "java": "fab fa-java",
        "css": "fab fa-css3-alt"
    };

    if(language === "C#"){
        return <i className="c-sharp-icon"/>;
    } else if(!language || !languageIcons[language.toLowerCase()]){
        return <i className="fas fa-file-code" {...props}/>;
    }

    return <i className={languageIcons[language.toLowerCase()]} {...props}/>;
};