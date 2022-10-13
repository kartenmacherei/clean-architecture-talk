import { initTRPC } from '@trpc/server';
import { z } from 'zod';

export class TrpcRouter {
    constructor(private userUseCase: UserUseCase) {
    }

    public router() {
        const t = initTRPC.create();

        return t.router({
            createUser: t.procedure
                .input(
                    z.object({
                        email: z.string(),
                        password: z.string(),
                    }),
                )
                .query(({input}) => {
                    this.userUseCase.createUser(input.email, input.password);
                }),
        });
    }
}