import React, {Fragment} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import {Contact} from "./pages/Contact";
import {HomePage} from "./pages/HomePage";
import {routes} from "./utils/constants/routes";

export const Router = () => (
    <BrowserRouter>
        <Fragment>
            <Route exact path={routes.contact} component={Contact}/>
            <Route exact path={routes.homePage} component={HomePage}/>
        </Fragment>
    </BrowserRouter>
);