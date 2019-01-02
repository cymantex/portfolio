import React from "react";
import {Page} from "../site-components/views/Page";
import {MainMenu} from "../site-components/views/MainMenu";
import ProjectReviewsController from "../site-components/controllers/ProjectReviewsController";
import {ProjectReviewsView} from "../site-components/views/ProjectReviewsView";

export const ReviewsPage = () => (
    <Page id="repositories-page">
        <MainMenu/>
        <h1 className="page-title">Reviews</h1>
        <ProjectReviewsController>
            <ProjectReviewsView/>
        </ProjectReviewsController>
    </Page>
);