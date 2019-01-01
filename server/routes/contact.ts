import {Express, Request, Response} from "express";
import {routes} from "../utils/constants/routes";
import {Sequelize} from "sequelize-typescript";
import ContactRequest from "../request/ContactRequest";

export default (app: Express, sequelize: Sequelize) => {
    app.use(`${routes.contact}`, (req: Request, res: Response) => {
        return new ContactRequest(req, res, sequelize).handle();
    });
};