import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import {UserUseCase} from "../application/UserUseCase";
import {Express} from "express";

export const trpcRouter = (
    expressApp: Express,
    userUserCase: UserUseCase,
) => {
    const t = initTRPC.create();

    expressApp.post("/createUser", async (req, res) => {
        const { email } = req.body;

        t.router({
            createUser: t.procedure
                .input(
                    z.object({
                        email: z.string(),
                        password: z.string(),
                    }),
                )
                .query(async ({input}) => {
                    await userUserCase.createUser(input.email, input.password);
                }),
        });


        res.json({
            email
        })
    });

}