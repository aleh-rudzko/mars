import { expect, should } from "chai";
import { suite, test } from "mocha-typescript";
import { ModelService } from "../../../server/entities/model/model.service";
import { ModelModel } from "../../../server/entities/model/model.model";
import IModel from "../../../server/entities/model/model.interface";
import BaseSpec from "./base.spec";

@suite("Model service")
class ModelSpec implements BaseSpec {

    public static async before() {
        should();
    }

    public async before() {
        await ModelModel.collection.drop();
    }

    @test("Get all models")
    public async getModels() {
        await Promise.all([
            ModelModel.create({ name: "test" }),
            ModelModel.create({ name: "test2" }),
            ModelModel.create({ name: "test3" })
        ]);
        const models = await ModelService.all();

        expect(models.length).to.be.equal(3);
    }

    @test("Create Model")
    public async createModel() {
        const name = "test";
        await ModelService.create({ name });
        const model = await ModelModel.findOne({ name });

        expect(model.name).to.be.equal(name);
        expect(model.createdAt).to.be.exist;
        expect(model.updatedAt).to.be.exist;
    }

    @test("get model by Id")
    public async getModel() {
        const createdModel = await ModelModel.create({ name: "test" });
        const model = await ModelService.get(createdModel.id);

        expect(model.name).to.be.equal("test");
        expect(model.createdAt).to.be.exist;
        expect(model.updatedAt).to.be.exist;
    }

    @test("Update model")
    public async updateModel() {
        const createdModel = await ModelModel.create({name: "test"});
        const data: IModel = {
            id: createdModel.id,
            name: "updatedName"
        };
        await ModelService.update(data);
        const model = await ModelModel.findById(createdModel.id);

        expect(model.id).to.be.equal(data.id);
        expect(model.name).to.be.equal(data.name);
        expect(model.createdAt.getTime()).to.be.equal(createdModel.createdAt.getTime());
        expect(model.updatedAt.getTime() > model.createdAt.getTime()).to.be.true;
    }

    @test("Remove model")
    public async removeModel() {
        const createdModel = await ModelModel.create({name: "test"});
        await ModelService.remove(createdModel.id);
        const model = await ModelModel.findById(createdModel.id);
        expect(model).to.be.null;
    }
}
