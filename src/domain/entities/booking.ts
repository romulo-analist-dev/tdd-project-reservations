import { DateRange } from "../value_objects/date_range";
import { Property } from "./property";
import { User } from "./user";


export class Booking {

    private readonly id: String;
    private readonly property: Property;
    private readonly guest: User;
    private readonly dateRange: DateRange;
    private readonly guestCount: number;

    constructor(id: String, property: Property, guest: User, dateRange: DateRange, guestCount: number){
        this.id = id;
        this.property = property;
        this.guest = guest;
        this.dateRange = dateRange;
        this.guestCount = guestCount;
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
}