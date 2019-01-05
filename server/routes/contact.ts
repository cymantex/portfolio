import {Express, Request, Response} from "express";
import {routes} from "../utils/constants/routes";
import ContactRequest from "../request/ContactRequest";

export default (app: Express) => {
    app.use(`${routes.contact}`, (req: Request, res: Response) => {
        return new ContactRequest(req, res).handle();
    });
};