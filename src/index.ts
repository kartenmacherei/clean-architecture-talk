import {userController} from "./adapters/CreateUserController";
import {UserUseCase} from "./application/UserUseCase";
import {SequelizeUserRepository} from "./adapters/SequelizeUserRepository";
import {SESMailService} from "./adapters/SESMailService";
import MongooseUserRepository from "./adapters/MongooseUserRepository";
import {trpcRouter} from "./adapters/TrpcRouter";
import {createExpressApp} from "./externals/express";

// const userRepository = new SequelizeUserRepository();
const userRepository = new MongooseUserRepository();
const mailService = new SESMailService();
const userUseCase = new UserUseCase(
    userRepository,
    mailService
);

const expressApp = createExpressApp();

userController(expressApp, userUseCase);
trpcRouter(expressApp, userUseCase)

expressApp.listen(80);