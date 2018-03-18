import { expect, should } from "chai";
import { suite, test } from "mocha-typescript";
import { getTypeModel } from "../../../server/models/type";
import getTypeService from "../../../server/services/type";
import { Type } from "../../../server/interfaces/type";

@suite("Type service")
class TypeSpec {

    public static async before() {
        should();
    }

    public async before() {
        await getTypeModel().collection.drop();
    }

    @test("Get all types")
    public async getTypes() {
        await Promise.all([
            getTypeModel().create({ name: "test", description: "test" }),
            getTypeModel().create({ name: "test2", description: "test" }),
            getTypeModel().create({ name: "test3", description: "test" })
        ]);

        const types = await getTypeService().all();

        expect(types.length).to.be.equal(3);
    }

    @test("Create type")
    public async createType() {
        const name = "test";
        const description = "testDescription";

        await getTypeService().create({ name , description });

        const type = await getTypeModel().findOne({ name });

        expect(type.name).to.be.equal(name);
        expect(type.description).to.be.equal(description);
    }

    @test("Find type by Id")
    public async findById() {
        const createdType = await getTypeModel().create({ name: "test", description: "test" });

        const type = await getTypeService().findById(createdType.id);

        expect(type.name).to.be.equal("test");
        expect(type.description).to.be.equal("test");
    }

    @test("Update type")
    public async updateType() {
        const createdType = await getTypeModel().create({name: "test", description: "test"});

        const data: Type = {
            id: createdType.id,
            name: "updatedName",
            description: "updatedDescription"
        };

        await getTypeService().update(data);

        const type = await getTypeModel().findById(createdType.id);

        expect(type.id).to.be.equal(data.id);
        expect(type.name).to.be.equal(data.name);
        expect(type.description).to.be.equal(data.description);
    }

    @test("Remove type")
    public async removeType() {
        const createdType = await getTypeModel().create({name: "test", description: "test"});

        await getTypeService().remove(createdType.id);

        const type = await getTypeModel().findById(createdType.id);

        expect(type).to.be.null;
    }
}
