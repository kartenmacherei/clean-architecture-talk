import {ExpressApp} from "./ExpressApp";

import CreateUserController from "./CreateUserController";

const createUserController = new CreateUserController();

const expressApp = new ExpressApp(createUserController);

expressApp.listen(80);
