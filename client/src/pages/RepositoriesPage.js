import React from "react";
import {Page} from "../site-components/views/Page";
import {MainMenu} from "../site-components/views/MainMenu";
import RepositoryController from "../site-components/controllers/ResositoryController";
import {RepositoryView} from "../site-components/views/sections/RepositoryView";

export const RepositoriesPage = () => (
    <Page id="repositories-page">
        <MainMenu/>
        <RepositoryController>
            <RepositoryView/>
        </RepositoryController>
    </Page>
);