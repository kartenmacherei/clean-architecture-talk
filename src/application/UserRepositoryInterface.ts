export interface UserRepositoryInterface {
    create(email: string, password: string): Promise<void>
}