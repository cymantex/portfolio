import React, {Fragment} from "react";
import {FancyLoader} from "./FancyLoader";
import {Moment} from "../../components/views/Moment";
import {getLanguageIcon} from "../../utils";
import {LanguageIcon} from "./LanguageIcon";
import {Animation} from "../../components/styled/Animation";

export const RepositoryView = ({repositories, ...props}) => {
    if(repositories.length === 0){
        return (
            <Fragment>
                <FancyLoader/>
                <h4 style={{fontWeight: 100}} className="mt-15">Loading github repositories...</h4>
            </Fragment>
        );
    }

    console.log(repositories);
    return (
        <Animation animation="fadeIn" duration={2000}>
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
        </Animation>
    );
};