import React from "react";
import {Page} from "../site-components/views/Page";
import {MainMenu} from "../site-components/views/MainMenu";
import ProjectsController from "../site-components/controllers/ProjectsController";
import {ProjectsView} from "../site-components/views/sections/ProjectsView";

export const ProjectsPage = () => (
    <Page id="projects-page">
        <MainMenu/>
        <ProjectsController>
            <ProjectsView/>
        </ProjectsController>
    </Page>
);