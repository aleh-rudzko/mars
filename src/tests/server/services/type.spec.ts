import { expect, should } from "chai";
import { suite, test } from "mocha-typescript";
import { getTypeModel, TypeModel } from "../../../server/models/type";
import getTypeService from "../../../server/services/type";
import { Model } from "mongoose";

@suite("Type service")
class TypeSpec {

    private static model: Model<TypeModel>;

    public static async before() {
        should();
        TypeSpec.model = getTypeModel();
    }

    public async before() {
        await TypeSpec.model.collection.drop();
    }

    @test("getTypes")
    public async getTypes() {
        await Promise.all([
            TypeSpec.model.create({name: "test1", description: "test"}),
            TypeSpec.model.create({name: "test2", description: "test"}),
            TypeSpec.model.create({name: "test3", description: "test"}),
        ]);

        const types = await getTypeService().all();

        expect(types.length).to.be.equal(3);
    }

    @test("createType")
    public async createType() {
        const name = "test1";
        const description = "testDescription";

        await TypeSpec.model.create({ name , description });

        const type = await getTypeModel().findOne({ name });

        expect(type.name).to.be.equal(name);
        expect(type.description).to.be.equal(description);
    }

    @test("findById")
    public async findById() {
        const createdType = await TypeSpec.model.create({name: "test1", description: "test"});

        const type = await getTypeService().findById(createdType.id.toString());

        expect(type.name).to.be.equal("test1");
        expect(type.description).to.be.equal("test");
    }

}
