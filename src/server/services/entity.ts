import { Entity } from "../interfaces/entity";
import { getEntityModel } from "../models/entity";
import { ObjectNotFound } from "../errors";

interface EntityService {
    all(): Promise<Entity[]>;

    create(Entity: Entity): Promise<Entity>;

    findById(id: string): Promise<Entity>;

    update(Entity: Entity): Promise<Entity>;

    remove(id: string): Promise<Entity>;
}

class EntityServiceImpl implements EntityService {
    public async all(): Promise<Entity[]> {
        return getEntityModel().find();
    }

    public create(entity: Entity): Promise<Entity> {
        return getEntityModel().create(entity);
    }

    public async findById(id: string): Promise<Entity> {
        const entity = await getEntityModel().findById(id);
        if (!entity) {
            return Promise.reject(new ObjectNotFound("Entity"));
        }
        return entity;
    }

    public async update(entity: Entity): Promise<Entity> {
        const updatedEntity = await getEntityModel().findByIdAndUpdate(entity.id, entity, { "new": true });
        if (!updatedEntity) {
            return Promise.reject(new ObjectNotFound("Entity"));
        }
        return updatedEntity;
    }

    public async remove(id: string): Promise<Entity> {
        const entity = await getEntityModel().findByIdAndRemove(id);
        if (!entity) {
            return Promise.reject(new ObjectNotFound("Entity"));
        }
        return entity;
    }
}

let EntityService: EntityService;

export default function getEntityService(): EntityService {
    if (!EntityService) {
        EntityService = new EntityServiceImpl();
    }
    return EntityService;
}
