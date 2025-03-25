import { DateRange } from './date_range';

describe('DateRange Value Object', () => {

    it('Deve lançar um erro se a data de término for antes da data de início', () => {
        expect(() => {
            new DateRange(new Date('2024-12-25'), new Date('2024-12-20'));
        }).toThrow('A data de término deve ser posterior à data de início');
    });

    it('Deve criar uma instância de DateRange com a data de início e término, e verificar o retorno dessas datas.', () => {
        const startDate = new Date('2024-12-20');
        const endDate = new Date('2024-12-25');

        const dateRange = new DateRange(startDate, endDate);

        expect(dateRange.getStartDate()).toEqual(startDate);
        expect(dateRange.getEndDate()).toEqual(endDate);
    });

    it('Deve calcular o total de noites corretamente', () => {
        const startDate = new Date('2024-12-20');
        const endDate = new Date('2024-12-25');

        const dateRange = new DateRange(startDate, endDate);
        const totalNights = dateRange.getTotalNights();

        expect(totalNights).toBe(5);

        const startDate1 = new Date('2024-12-10');
        const endDate1 = new Date('2024-12-11');
        
        const dateRange1 = new DateRange(startDate1, endDate1);
        const totalNights1 = dateRange1.getTotalNights();

        expect(totalNights1).toBe(1);
    });

    it('Deve verificar se dois intervalos de datas se sobrepõem', () => {
        const dateRange1 = new DateRange(new Date('2024-12-20'), new Date('2024-12-25'));
        const dateRange2 = new DateRange(new Date('2024-12-22'), new Date('2024-12-27'));
        
        const overlaps = dateRange1.overlaps(dateRange2);

        expect(overlaps).toBe(true);

        const dateRange3 = new DateRange(new Date('2024-12-26'), new Date('2024-12-30'));
        const dateRange4 = new DateRange(new Date('2024-12-29'), new Date('2024-12-31'));
        
        const overlaps2 = dateRange3.overlaps(dateRange4);

        expect(overlaps2).toBe(true);
    });

    it('Deve lançar erro se a data de início for igual à data de término', () => {
        const date = new Date('2024-12-20');

        expect(() => {
            new DateRange(date, date);
        }).toThrow('A data de início e término não podem ser iguais.');
    });
});