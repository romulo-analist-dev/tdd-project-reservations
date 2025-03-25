import { User } from './user';

describe('User Entity', () => {

    it('Deve criar uma instância de User com ID e Nome', () => {
        const user = new User('1', 'Romulo Cavalcante');

        expect(user.getId()).toBe('1');
        expect(user.getName()).toBe('Romulo Cavalcante');
    });

    it('Deve lançar um erro se o nome for vazio', () => {
        expect(() => new User('1', '')).toThrow('o nome é obrigatório');
    });

    it('Deve lançar um erro se o ID for vazio', () => {
        expect(() => new User('', 'Ingrid Batista')).toThrow('o ID é obrigatório');
    });
});