import * as express from "express";
import * as api from "./api";

export const register = (app: express.Application) => {
    // home page
    app.get("/", (req: any, res) => {
        res.render("index");
    });

    // about page
    app.get("/about", (req: any, res) => {
        res.render("about");
    });

    api.register(app);
};
