import React from "react";
import {FancyLoader} from "./FancyLoader";
import {Moment} from "../../components/views/Moment";
import {getLanguageIcon} from "../../utils";
import {LanguageIcon} from "./LanguageIcon";

export const RepositoryView = ({repositories, ...props}) => {
    if(repositories.length === 0){
        return <FancyLoader/>;
    }

    console.log(repositories);
    return (
        <div className="repositories" {...props}>
            {repositories.map((repository, i) => (
                <a style={{backgroundImage: `url(${getLanguageIcon(repository.language)})`}}
                   className="repository"
                   href={repository.url}
                   target="_blank"
                   rel="noopener noreferrer"
                   key={i}
                >
                    <LanguageIcon language={repository.language}/>
                    <span className="title">{repository.name}</span>
                    <span className="date"><Moment time={repository.createdAt}/></span>
                </a>
            ))}
        </div>
    );
};