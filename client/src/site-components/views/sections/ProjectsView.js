import React, {Component} from "react";
import {ApiErrorMessage} from "../Messages";
import {Section} from "./Section";
import AlertOptionPane from "../../../components/styled/Alert/AlertOptionPane";

export class ProjectsView extends Component {
    showProjectAlert = (projectItem) => {
        AlertOptionPane.showPlainAlert({
            title: projectItem.title,
            htmlMessage: (
                <div id="project-modal">
                    <div className="project-description">
                        <h5 className="mb-7">About the project</h5>
                        <p>{projectItem.description}</p>
                    </div>
                    <div className="project-gallery">
                        {projectItem.files.map((file, i) => (
                            <img alt={file.filename} src={file.url} key={i}/>
                        ))}
                    </div>
                </div>
            ),
            confirmText: "Close"
        });
    }

    renderProject = (projectItem, i) => {
        return (
            <div
                style={(projectItem.thumbnail)
                    ? {backgroundImage: `url(${projectItem.thumbnail})`} : {}}
                className="project"
                onClick={() => this.showProjectAlert(projectItem)}
                key={i}
            >
                <span className="title">{projectItem.title}</span>
            </div>
        );
    };

    render(){
        const {apiError, projects, ...props} = this.props;

        if(apiError){
            return <ApiErrorMessage/>;
        } else if(projects.length === 0){
            return (
                <Section.Loader>
                    <h4>Loading projects...</h4>
                </Section.Loader>
            );
        }

        return (
            <Section id="projects" {...props}>
                {projects.map(this.renderProject)}
            </Section>
        );
    }
}