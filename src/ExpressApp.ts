import express from "express";
import type CreateUserController from "./CreateUserController";

export class ExpressApp {
    constructor(
        public createUserController: CreateUserController
    ) {
    }

    public listen(port: number) {
        const app = express();
        app.use(express.json())

        app.post("/createUser", this.createUserController.controller);

        app.listen(port);
    }
}