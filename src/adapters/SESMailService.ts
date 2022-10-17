import AWS from "aws-sdk";
import {MailServiceInterface} from "../application/MailServiceInterface";

export class SESMailService implements MailServiceInterface{
    public async send(email: string) {

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

    }
}