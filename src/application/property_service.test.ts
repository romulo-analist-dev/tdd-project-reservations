import { FakePropertyRepository } from "../infrastructure/repositories/fake_property_repository";
import {PropertyService } from "./property_service"

describe("Property Service", () => {
    let propertySevice: PropertyService;
    let fakePropertyRepository: FakePropertyRepository;

    beforeEach(() => {
        fakePropertyRepository = new FakePropertyRepository();
        propertySevice = new PropertyService(fakePropertyRepository);
    });

    it("Deve retornar null quando um ID inválido for passado", async () => {

        const property = await propertySevice.findPropertyById("999");

        expect(property).toBeNull();
    });

});