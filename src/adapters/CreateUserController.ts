import {Express, Request, Response} from "express";
import {UserUseCase} from "../application/UserUseCase";

export const userController = (
    expressApp: Express,
    userUseCase: UserUseCase
) => {
    expressApp.post("/createUser", async (req, res) => {
        const {email, password} = req.body;

        await userUseCase.createUser(email, password)

        res.json({
            email
        })
    });
}