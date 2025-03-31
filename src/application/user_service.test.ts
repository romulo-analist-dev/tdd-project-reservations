import {UserService} from "./user_service" 
import {FakeUserRepository} from "../infrastructure/repositories/fake_user_repository" 

describe("User Service", () => {

    let userService: UserService;
    let fakeUserRepository: FakeUserRepository;

    beforeEach(() => {
        fakeUserRepository = new FakeUserRepository();
        userService = new UserService(fakeUserRepository);
    });

    it("Deve retornar null quando um ID inválido for passado", async () => {

        const user = await userService.findUserById("999");

        expect(user).toBeNull();
    });

    it("Deve retornar um usuário quando um ID válido for fornecido", async () => {

        const user = await userService.findUserById("1");

        expect(user).not.toBeNull();
        expect(user?.getId()).toBe("1");
        expect(user?.getName()).toBe("Romulo");

    });
    
});