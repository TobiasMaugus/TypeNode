import AppError from "../../errors/AppError";
import UsersRepositoryInMemory from "../../in-memory/UsersRepositoryIM";
import { ICreateUserDTO } from "../../Interfaces/User/ICreateUser";
import AuthenticateUserService from "./AuthenticateUserService"
import CreateUserService from "./CreateUserService";


let authenticateUserService: AuthenticateUserService;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserService: CreateUserService;

describe("Authenticate User", ()=>{
    beforeEach(()=>{
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        authenticateUserService = new AuthenticateUserService(usersRepositoryInMemory);
        createUserService = new CreateUserService(usersRepositoryInMemory);
    });

    it("should be able to authenticate an user", async ()=>{
        const user: ICreateUserDTO={
            driver_license: "001122",
            email: "user@user.com",
            password: "12345",
            name: "John Doe"
        };

        await createUserService.execute(user);
        const result = await authenticateUserService.execute({
            email: user.email,
            password: user.password
        });
        expect(result).toHaveProperty("token");
    });

    it("should not be able to auth an nonexistent user", async()=>{
        expect(async()=>{
            await authenticateUserService.execute({
                email: "false@false.com",
                password: "12345"
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it("should not be able to auth with incorret password", async()=>{
        expect(async()=>{
            const user: ICreateUserDTO={
                driver_license: "0123456",
                email: "user@test.com",
                password: "13311",
                name: "John Doe"
            };
            await createUserService.execute(user);

            await authenticateUserService.execute({
                email: user.email,
                password: "incorrect password"
            });
        }).rejects.toBeInstanceOf(AppError);
    });
})