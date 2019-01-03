import React from "react";
import {Page} from "../site-components/views/Page";
import {MainMenu} from "../site-components/views/MainMenu";
import {ContactForm} from "../site-components/views/ContactForm";
import ContactFormController from "../site-components/controllers/ContactFormController";

export const ContactPage = () => (
    <Page id="contact-page">
        <MainMenu/>
        <div className="glass-container">
            <ContactFormController>
                <ContactForm onSubmit={console.log}/>
            </ContactFormController>
        </div>
    </Page>
);