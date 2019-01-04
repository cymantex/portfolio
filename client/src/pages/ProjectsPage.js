import React from "react";
import {Page} from "../site-components/views/Page";
import {MainMenu} from "../site-components/views/MainMenu";
import ProjectsController from "../site-components/controllers/ProjectsController";
import {ProjectsView} from "../site-components/views/sections/ProjectsView";
import {SocialMenu} from "../site-components/views/SocialMenu";

export const ProjectsPage = () => (
    <Page id="projects-page">
        <MainMenu/>
        <SocialMenu/>
        <ProjectsController>
            <ProjectsView/>
        </ProjectsController>
    </Page>
);