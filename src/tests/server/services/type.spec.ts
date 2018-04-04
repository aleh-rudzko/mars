import { expect, should } from "chai";
import { suite, test } from "mocha-typescript";
import { TypeModel } from "../../../server/models/type";
import { TypeService } from "../../../server/services/type";
import { Type } from "../../../server/interfaces/type";
import BaseSpec from "./base.spec";

@suite("Type service")
class TypeSpec implements BaseSpec {

    public static async before() {
        should();
    }

    public async before() {
        await TypeModel.collection.drop();
    }

    @test("Get all types")
    public async getTypes() {
        await Promise.all([
            TypeModel.create({ name: "test", description: "test" }),
            TypeModel.create({ name: "test2", description: "test" }),
            TypeModel.create({ name: "test3", description: "test" })
        ]);

        const types = await TypeService.all();

        expect(types.length).to.be.equal(3);
    }

    @test("Create type")
    public async createType() {
        const name = "test";
        const description = "testDescription";

        await TypeService.create({ name , description });

        const type = await TypeModel.findOne({ name });

        expect(type.name).to.be.equal(name);
        expect(type.description).to.be.equal(description);
        expect(type.createdAt).to.be.exist;
        expect(type.updatedAt).to.be.exist;
    }

    @test("Find type by Id")
    public async findById() {
        const createdType = await TypeModel.create({ name: "test", description: "test" });

        const type = await TypeService.get(createdType.id);

        expect(type.name).to.be.equal("test");
        expect(type.description).to.be.equal("test");
        expect(type.createdAt).to.be.exist;
        expect(type.updatedAt).to.be.exist;
    }

    @test("Update type")
    public async updateType() {
        const createdType = await TypeModel.create({name: "test", description: "test"});

        const data: Type = {
            id: createdType.id,
            name: "updatedName",
            description: "updatedDescription"
        };

        await TypeService.update(data);

        const type = await TypeModel.findById(createdType.id);

        expect(type.id).to.be.equal(data.id);
        expect(type.name).to.be.equal(data.name);
        expect(type.description).to.be.equal(data.description);
        expect(type.createdAt.getTime()).to.be.equal(createdType.createdAt.getTime());
        expect(type.updatedAt.getTime() > type.createdAt.getTime()).to.be.true;
    }

    @test("Remove type")
    public async removeType() {
        const createdType = await TypeModel.create({name: "test", description: "test"});

        await TypeService.remove(createdType.id);

        const type = await TypeModel.findById(createdType.id);

        expect(type).to.be.null;
    }
}
