import {Request, Response} from "express";
import {DataTypes, Sequelize} from "sequelize";
import AWS from "aws-sdk";

const sequelize = new Sequelize('sqlite::memory:');
const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
});

export default class CreateUserController {
    public async controller(req: Request, res: Response) {
        const { email, password} = req.body;

        await User.create({
            email,
            password,
        });

        const ses = new AWS.SES({
            region: 'eu-central-1',
        });

        const body = 'Welcome to the app!';
        const subject = 'Welcome!'
        const params = {
            Destination: {
                ToAddresses: [
                    `${email}`,
                ]
            },
            Message: {
                Body: {
                    Text: {
                        Data: `${body}`
                    }
                },
                Subject: {
                    Data: `${subject}`
                }
            },
            Source: 'clean-architecture@celebrate.company',
        };

        await ses.sendEmail(params).promise();

        res.json({
            email
        })
    }
}