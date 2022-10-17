import express from "express";

export const createExpressApp = () => {
    const app = express();
    app.use(express.json())

    return app;
}