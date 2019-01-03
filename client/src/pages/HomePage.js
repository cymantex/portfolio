import React from "react";
import {Page} from "../site-components/views/Page";
import {MainMenu} from "../site-components/views/MainMenu";
import {IntroView} from "../site-components/views/sections/IntroView";

export const HomePage = () => (
    <Page id="home-page">
        <MainMenu/>
        <IntroView/>
    </Page>
);