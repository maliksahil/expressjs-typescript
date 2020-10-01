import * as express from "express";
import { DataService } from "./DataService";

export const register = (app: express.Application) => {
    const apiPrefix = "/api/"

    app.get(apiPrefix + "todos", async (req: any, res) => {
        try {
            res.json(await DataService.getTodos());
        } catch (err) {
            res.json({ error: err.message || err });
        }
    });
};