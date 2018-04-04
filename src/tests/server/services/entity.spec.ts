import { expect, should } from "chai";
import { suite, test } from "mocha-typescript";
import { EntityModel } from "../../../server/models/entity";
import { Entity } from "../../../server/interfaces/entity";
import { EntityService } from "../../../server/services/entity";
import BaseSpec from "./base.spec";

@suite("Entity service")
class EntitySpec implements BaseSpec {

    public static async before() {
        should();
    }

    public async before() {
        await EntityModel.collection.drop();
    }

    @test("Get all entities")
    public async getEntities() {
        await Promise.all([
            EntityModel.create({ name: "test", description: "test" }),
            EntityModel.create({ name: "test2", description: "test" }),
            EntityModel.create({ name: "test3", description: "test" })
        ]);

        const entities = await EntityService.all();

        expect(entities.length).to.be.equal(3);
    }

    @test("Create entity")
    public async createEntity() {
        const name = "test";
        const description = "testDescription";

        await EntityService.create({ name , description });

        const entity = await EntityModel.findOne({ name });

        expect(entity.name).to.be.equal(name);
        expect(entity.description).to.be.equal(description);
        expect(entity.createdAt).to.be.exist;
        expect(entity.updatedAt).to.be.exist;
    }

    @test("Find entity by Id")
    public async findById() {
        const createdEntity = await EntityModel.create({ name: "test", description: "test" });

        const entity = await EntityService.get(createdEntity.id);

        expect(entity.name).to.be.equal("test");
        expect(entity.description).to.be.equal("test");
        expect(entity.createdAt).to.be.exist;
        expect(entity.updatedAt).to.be.exist;
    }

    @test("Update entity")
    public async updateEntity() {
        const createdEntity = await EntityModel.create({name: "test", description: "test"});

        const data: Entity = {
            id: createdEntity.id,
            name: "updatedName",
            description: "updatedDescription"
        };

        await EntityService.update(data);

        const entity = await EntityModel.findById(createdEntity.id);

        expect(entity.id).to.be.equal(data.id);
        expect(entity.name).to.be.equal(data.name);
        expect(entity.description).to.be.equal(data.description);
        expect(entity.createdAt.getTime()).to.be.equal(createdEntity.createdAt.getTime());
        expect(entity.updatedAt.getTime() > entity.createdAt.getTime()).to.be.true;
    }

    @test("Remove entity")
    public async removeEntity() {
        const createdEntity = await EntityModel.create({name: "test", description: "test"});

        await EntityService.remove(createdEntity.id);

        const entity = await EntityModel.findById(createdEntity.id);

        expect(entity).to.be.null;
    }
}
