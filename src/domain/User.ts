export class User {
    constructor(public email: string, public password: string) {
        this.validate(password)
    }

    private validate(password: string) {
        if (password.length <= 10 ){
            throw new Error();
        }
    }
}