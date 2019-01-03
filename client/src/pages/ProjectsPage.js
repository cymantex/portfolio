import React from "react";
import {Page} from "../site-components/views/Page";
import {MainMenu} from "../site-components/views/MainMenu";
import PortfolioController from "../site-components/controllers/PortfolioController";
import PortfolioView from "../site-components/views/sections/PortfolioView";

export const ProjectsPage = () => (
    <Page id="projects-page">
        <MainMenu/>
        <PortfolioController>
            <PortfolioView/>
        </PortfolioController>
    </Page>
);