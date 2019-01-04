import React from "react";
import {Page} from "../site-components/views/Page";
import {MainMenu} from "../site-components/views/MainMenu";
import {ContactForm} from "../site-components/views/ContactForm";
import ContactFormController from "../site-components/controllers/ContactFormController";
import {SocialMenu} from "../site-components/views/SocialMenu";

export const ContactPage = () => (
    <Page id="contact-page">
        <MainMenu/>
        <SocialMenu/>
        <div className="columns breakpoint md">
            <div className="column wrapper-4">
                <h1 className="display-3">Contact me</h1>
                <ContactFormController>
                    <ContactForm/>
                </ContactFormController>
            </div>
            <div className="column wrapper-4">
                <h2 className="display-3">My location</h2>
                <iframe
                    title="map"
                    id="google-map"
                    src="https://snazzymaps.com/embed/123581"
                />
            </div>
        </div>
    </Page>
);