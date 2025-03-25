export class User {

    private readonly id: string;
    private readonly name: string;

    constructor(id: string, name: string){
        this.validateName(name);
        this.validateId(id);

        this.id = id;
        this.name = name;
    }

    validateName(name: string): void {
        if (!name) {
            throw new Error('o nome é obrigatório');
        }
    }

    validateId(id: string): void {
        if (!id) {
            throw new Error('o ID é obrigatório');
        }
    }

    getId(): string {
        return this.id;
    }

    getName(): string { 
        return this.name;
    }
}