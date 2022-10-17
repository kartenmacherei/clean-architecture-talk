export interface MailServiceInterface {
    send(email: string): Promise<void>
}