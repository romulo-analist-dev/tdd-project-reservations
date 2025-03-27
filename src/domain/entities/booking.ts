import { DateRange } from "../value_objects/date_range";
import { Property } from "./property";
import { User } from "./user";


export class Booking {

    private readonly id: String;
    private readonly property: Property;
    private readonly guest: User;
    private readonly dateRange: DateRange;
    private readonly guestCount: number;
    private readonly status: "CONFIRMED" | "CANCELLED" = "CONFIRMED";
    private totalPrice: number;

    constructor(id: String, property: Property, guest: User, dateRange: DateRange, guestCount: number){

        if(guestCount <= 0){
            throw new Error('o número de hóspedes deve ser maior que zero');
        }

        if(!property.isAvailable(dateRange)){
            throw new Error('A propriedade não está disponível para o período solicitado.');
        }

        property.validateGuestCount(guestCount)

        this.id = id;
        this.property = property;
        this.guest = guest;
        this.dateRange = dateRange;
        this.guestCount = guestCount;
        this.totalPrice = property.calculateTotalPrice(dateRange);
        this.status = "CONFIRMED";

        // Sempre se questione se nesse caso eu preciso isolar esse teste ou não
        // ele pode afetar o resultado deste meu teste?
        property.addBooking(this);
    }

    getId(): String {
        return this.id;
    }

    getProperty(): Property {
        return this.property;
    }

    getUser(): User {
        return this.guest;
    }

    getDateRange(): DateRange {
        return this.dateRange;
    }

    getGuestCount(): number {
        return this.guestCount;
    }

    getStatus(): "CONFIRMED" | "CANCELLED" {
        return this.status;
    }

    getTotalPrice(): number {
        return this.totalPrice;
    }
}