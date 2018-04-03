import { expect, should } from "chai";
import { suite, test } from "mocha-typescript";
import { getEntityModel } from "../../../server/models/entity";
import { Entity } from "../../../server/interfaces/entity";
import getEntityService from "../../../server/services/entity";

@suite("Entity service")
class EntitySpec {

    public static async before() {
        should();
    }

    public async before() {
        await getEntityModel().collection.drop();
    }

    @test("Get all entities")
    public async getTypes() {
        await Promise.all([
            getEntityModel().create({ name: "test", description: "test" }),
            getEntityModel().create({ name: "test2", description: "test" }),
            getEntityModel().create({ name: "test3", description: "test" })
        ]);

        const entities = await getEntityService().all();

        expect(entities.length).to.be.equal(3);
    }

    @test("Create entity")
    public async createEntity() {
        const name = "test";
        const description = "testDescription";

        await getEntityService().create({ name , description });

        const entity = await getEntityModel().findOne({ name });

        expect(entity.name).to.be.equal(name);
        expect(entity.description).to.be.equal(description);
        expect(entity.createdAt).to.be.exist;
        expect(entity.updatedAt).to.be.exist;
    }

    @test("Find entity by Id")
    public async findById() {
        const createdEntity = await getEntityModel().create({ name: "test", description: "test" });

        const entity = await getEntityService().findById(createdEntity.id);

        expect(entity.name).to.be.equal("test");
        expect(entity.description).to.be.equal("test");
        expect(entity.createdAt).to.be.exist;
        expect(entity.updatedAt).to.be.exist;
    }

    @test("Update entity")
    public async updateEntity() {
        const createdEntity = await getEntityModel().create({name: "test", description: "test"});

        const data: Entity = {
            id: createdEntity.id,
            name: "updatedName",
            description: "updatedDescription"
        };

        await getEntityService().update(data);

        const entity = await getEntityModel().findById(createdEntity.id);

        expect(entity.id).to.be.equal(data.id);
        expect(entity.name).to.be.equal(data.name);
        expect(entity.description).to.be.equal(data.description);
        expect(entity.createdAt.getTime()).to.be.equal(createdEntity.createdAt.getTime());
        expect(entity.updatedAt.getTime() > entity.createdAt.getTime()).to.be.true;
    }

    @test("Remove entity")
    public async removeEntity() {
        const createdEntity = await getEntityModel().create({name: "test", description: "test"});

        await getEntityService().remove(createdEntity.id);

        const entity = await getEntityModel().findById(createdEntity.id);

        expect(entity).to.be.null;
    }
}
