import React from "react";
import {Page} from "../site-components/views/Page";
import {MainMenu} from "../site-components/views/MainMenu";
import ReviewsController from "../site-components/controllers/ReviewsController";
import {ReviewsView} from "../site-components/views/ReviewsView";

export const ReviewsPage = () => (
    <Page id="repositories-page">
        <MainMenu/>
        <ReviewsController>
            <ReviewsView/>
        </ReviewsController>
    </Page>
);