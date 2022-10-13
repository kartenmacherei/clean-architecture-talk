import express from "express";
import {TrpcRouter} from "./TrpcRouter";

export class TrpcApp {
    constructor(
        public trcpRouter: TrpcRouter
    ) {
    }

    public listen(port: number) {
        const app = express();
        app.use(express.json())

        app.post("/createUser", this.trcpRouter.router);

        app.listen(port);
    }
}