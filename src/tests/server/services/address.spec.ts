import { expect, should } from "chai";
import { suite, test } from "mocha-typescript";
import { getPropertyAddressModel } from "../../../server/models/propertyAddress";
import getPropertyAddressService from "../../../server/services/propertyAddress";
import { PropertyAddress } from "../../../server/interfaces/propertyAddress";

@suite("Address service")
class AddressSpec {

    public static async before() {
        should();
    }

    public async before() {
        await getPropertyAddressModel().collection.drop();
    }

    @test("Get all entities")
    public async getTypes() {
        await Promise.all([
            getPropertyAddressModel().create({ street: "test", city: "test", country: "test" }),
            getPropertyAddressModel().create({ street: "test2", city: "test", country: "test" }),
            getPropertyAddressModel().create({ street: "test3", city: "test", country: "test" })
        ]);

        const addresses = await getPropertyAddressService().all();

        expect(addresses.length).to.be.equal(3);
    }

    @test("Create address")
    public async createAddress() {
        const street = "test4";
        const city = "test";
        const country = "test";

        await getPropertyAddressService().create({ street, city, country });

        const address = await getPropertyAddressModel().findOne({ street });

        expect(address.street).to.be.equal(street);
        expect(address.city).to.be.equal(city);
        expect(address.country).to.be.equal(country);
        expect(address.createdAt).to.be.exist;
        expect(address.updatedAt).to.be.exist;
    }

    @test("Find address by Id")
    public async findById() {
        const createdAddress = await getPropertyAddressModel().create({ street: "test", city: "test" });

        const address = await getPropertyAddressService().findById(createdAddress.id);

        expect(address.street).to.be.equal("test");
        expect(address.city).to.be.equal("test");
        expect(address.country).to.be.equal("Беларусь");
        expect(address.createdAt).to.be.exist;
        expect(address.updatedAt).to.be.exist;
    }

    @test("Update address")
    public async updateAddress() {
        const createdAddress = await getPropertyAddressModel()
            .create({ street: "test", city: "test", country: "test" });

        const data: PropertyAddress = {
            id: createdAddress.id,
            street: "updatedStreet",
            city: "updatedCity",
            country: "updatedCountry"
        };

        await getPropertyAddressService().update(data);

        const address = await getPropertyAddressModel().findById(createdAddress.id);

        expect(address.id).to.be.equal(data.id);
        expect(address.street).to.be.equal(data.street);
        expect(address.city).to.be.equal(data.city);
        expect(address.country).to.be.equal(data.country);
        expect(address.createdAt.getTime()).to.be.equal(createdAddress.createdAt.getTime());
        expect(address.updatedAt.getTime() > address.createdAt.getTime()).to.be.true;
    }

    @test("Remove address")
    public async removeAddress() {
        const createdAddress = await getPropertyAddressModel()
            .create({ street: "test", city: "test", country: "test" });

        await getPropertyAddressService().remove(createdAddress.id);

        const address = await getPropertyAddressModel().findById(createdAddress.id);

        expect(address).to.be.null;
    }
}
