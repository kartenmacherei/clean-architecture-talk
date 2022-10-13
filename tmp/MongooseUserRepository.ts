import UserRepositoryInterface from "../application/UserRepositoryInterface";
import { Schema, model, connect } from 'mongoose';

connect('mongodb://mongodb:27017/test');

interface IUser {
    email: string;
    password: string
}
const User = model('User',
    new Schema<IUser>({
        email: { type: String, required: true },
        password: { type: String, required: true },
    })
);

export default class MongooseUserRepository implements UserRepositoryInterface{
    async create(email: string, password: string): Promise<void> {

        const user = new User({ email, password });

        await user.save();
    }
}