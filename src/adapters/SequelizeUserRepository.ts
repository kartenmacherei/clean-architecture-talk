import {DataTypes, Sequelize} from "sequelize";
import {UserRepositoryInterface} from "../application/UserRepositoryInterface";


const sequelize = new Sequelize('sqlite::memory:');
const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
});

export class SequelizeUserRepository implements UserRepositoryInterface{
    public async create(email: string, password: string) {
        await User.create({
            email,
            password,
        });

    }
}