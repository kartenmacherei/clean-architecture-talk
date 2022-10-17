import {UserRepositoryInterface} from "./UserRepositoryInterface";
import {MailServiceInterface} from "./MailServiceInterface";
import {User} from "../domain/User";

export class UserUseCase {
    constructor(
        private userRepository: UserRepositoryInterface,
        private emailService: MailServiceInterface
    ) {
    }
    public async createUser(email: string, password: string) {
        const user = new User(email, password);

        await this.userRepository.create(user.email, user.password)
        await this.emailService.send(user.email)
    }
}