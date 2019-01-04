import React from "react";
import {Page} from "../site-components/views/Page";
import {MainMenu} from "../site-components/views/MainMenu";
import ReviewsController from "../site-components/controllers/ReviewsController";
import {ReviewsView} from "../site-components/views/sections/ReviewsView";
import {SocialMenu} from "../site-components/views/SocialMenu";

export const ReviewsPage = () => (
    <Page id="reviews-page">
        <MainMenu/>
        <SocialMenu/>
        <ReviewsController>
            <ReviewsView/>
        </ReviewsController>
    </Page>
);