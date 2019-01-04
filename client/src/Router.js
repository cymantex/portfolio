import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import {ContactPage} from "./pages/ContactPage";
import {HomePage} from "./pages/HomePage";
import {ProjectsPage} from "./pages/ProjectsPage";
import {RepositoriesPage} from "./pages/RepositoriesPage";
import {ReviewsPage} from "./pages/ReviewsPage";
import {routes} from "./utils/constants/routes";
import {Animation} from "./components/styled/Animation";

export const Router = () => (
    <BrowserRouter>
        <Animation duration={500}>
            <Route exact path={routes.contactPage} component={ContactPage}/>
            <Route exact path={routes.homePage} component={HomePage}/>
            <Route exact path={routes.projectsPage} component={ProjectsPage}/>
            <Route exact path={routes.repositoriesPage} component={RepositoriesPage}/>
            <Route exact path={routes.reviewsPage} component={ReviewsPage}/>
        </Animation>
    </BrowserRouter>
);