import React from "react";
import {Page} from "../site-components/views/Page";
import {MainMenu} from "../site-components/views/MainMenu";
import {Intro} from "../site-components/views/Intro";

export const HomePage = () => (
    <Page id="home-page">
        <MainMenu/>
        <Intro/>
    </Page>
);