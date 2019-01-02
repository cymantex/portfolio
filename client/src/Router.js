import React, {Fragment} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import {ContactPage} from "./pages/ContactPage";
import {HomePage} from "./pages/HomePage";
import {RepositoriesPage} from "./pages/RepositoriesPage";
import {routes} from "./utils/constants/routes";

export const Router = () => (
    <BrowserRouter>
        <Fragment>
            <Route exact path={routes.contactPage} component={ContactPage}/>
            <Route exact path={routes.homePage} component={HomePage}/>
            <Route exact path={routes.repositoriesPage} component={RepositoriesPage}/>
        </Fragment>
    </BrowserRouter>
);