import React from "react";
import {Moment} from "../../../components/views/Moment";
import {getLanguageIcon} from "../../../utils";
import {LanguageIcon} from "../LanguageIcon";
import {Section} from "./Section";
import {ApiErrorMessage} from "../Messages";

export const RepositoryView = ({apiError, repositories, ...props}) => {
    if(apiError){
        return <ApiErrorMessage/>;
    } else if(repositories.length === 0){
        return (
            <Section.Loader>
                <h4>Loading github repositories...</h4>
            </Section.Loader>
        );
    }

    return (
        <Section id="repositories" {...props}>
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
        </Section>
    );
};