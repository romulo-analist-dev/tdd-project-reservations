import { Property } from './property';
import { DateRange } from '../value_objects/date_range';
import { User } from './user';
import { Booking } from './booking';

describe('Property Entity', () => {
    
    it('Deve criar uma instância de Property com todos os atributos', () => {
        
        const property = new Property(
            '1',
            'Casa de praia',
            'Uma bela casa na praia',
            4,
            200);

            expect(property.getId()).toBe('1');
            expect(property.getName()).toBe('Casa de praia');
            expect(property.getDescription()).toBe('Uma bela casa na praia');
            expect(property.getMaxGuests()).toBe(4);
            expect(property.getBasePricePerNight()).toBe(200);
        
    });

    it('Deve lançar um erro se o nome for vazio', () => {
        
        expect(() => new Property('1', '', 'Uma bela casa na praia', 4, 200)).toThrow('o nome é obrigatório');
        
    });

    it('Deve lançar um erro e o número máximo de hóspedes for zero ou negativo', () => {
        expect(() => new Property('1', 'Casa de praia', 'Uma bela casa na praia', 0, 200)).toThrow('o número máximo de hóspedes deve ser maior que zero');
    });

    it('Deve validar o número máximo de hóspedes', () => {
        const property = new Property('1', 'Casa de praia', 'Uma bela casa na praia', 5, 150);

        expect(() =>{
            property.validateGuestCount(6);
        }).toThrow('O número máximo de hóspedes excedido. Máximo permitido: 5.');
        
    });

    it('Não deve aplicar desconto para estadias menores que 7 noites', () => {
        const property = new Property('2', 'Apartamento na praia', 'AP Show', 2, 100);

        const dateRange = new DateRange(
            new Date('2024-12-10'),
            new Date('2024-12-16')
        );

        const totalPrice = property.calculateTotalPrice(dateRange);

        expect(totalPrice).toBe(600);
    });

    it('Deve aplicar desconto para estadias de 7 noites ou mais', () => {
        const property = new Property('2', 'Apartamento na praia', 'AP Show', 2, 100);

        const dateRange = new DateRange(
            new Date('2024-12-10'),
            new Date('2024-12-17')
        );

        const totalPrice = property.calculateTotalPrice(dateRange);

        expect(totalPrice).toBe(630); // 7 noites * 100 * 0.9 = 630
    });

    it('Deve verificar disponibilidade da propriedade', () => {

        const property = new Property('2', 'Apartamento na praia', 'AP Show', 4, 100);
        const user = new User('1', 'Romulo');

        const dateRange = new DateRange(
            new Date('2024-12-20'),
            new Date('2024-12-25')
        );

        const dateRange2 = new DateRange(
            new Date('2024-12-22'),
            new Date('2024-12-27')
        );

        new Booking("1", property, user, dateRange, 2);

        expect(property.isAvailable(dateRange)).toBe(false);
        expect(property.isAvailable(dateRange2)).toBe(false);
    });
});