import CRUDService, { MongooseCRUDService } from "../common/crud.service";
import { Entity } from "./entity.interface";
import { EntityDocument, EntityModel } from "./entity.model";

interface EntityCRUDService extends MongooseCRUDService<Entity> {}

export const EntityService: EntityCRUDService =
    new CRUDService<EntityDocument, Entity>(EntityModel);
