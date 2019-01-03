import React from "react";
import {Page} from "../site-components/views/Page";
import {MainMenu} from "../site-components/views/MainMenu";
import {ContactForm} from "../site-components/views/ContactForm";
import ContactFormController from "../site-components/controllers/ContactFormController";

export const ContactPage = () => (
    <Page id="contact-page">
        <MainMenu/>
        <div className="columns breakpoint md">
            <div className="column">
                <h1 className="display-3">Contact me</h1>
                <ContactFormController>
                    <ContactForm/>
                </ContactFormController>
            </div>
            <div className="column">
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