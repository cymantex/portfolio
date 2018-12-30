import React, {Fragment} from "react";

export const RepositoryView = ({repositories, ...props}) => {
    console.log(repositories);
    return (
        <div {...props}>
            <h1>Repositories</h1>
            <hr/>
            {repositories.map((repository, i) => (
                <Fragment key={i}>
                    <p>Created at: {repository.createdAt}</p>
                    <p>Updated at: {repository.updatedAt}</p>
                    <p>Language: {repository.language}</p>
                    <p>Name: {repository.name}</p>
                    <p>Description: {repository.description}</p>
                    <p>Url: {repository.url}</p>
                    <hr/>
                </Fragment>
            ))}
        </div>
    );
};