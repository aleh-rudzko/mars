import CRUDService, { MongooseCRUDService } from "./crud";
import { Entity } from "../interfaces/entity";
import { EntityDocument, EntityModel } from "../models/entity";

interface EntityCRUDService extends MongooseCRUDService<Entity> {}

export const EntityService: EntityCRUDService =
    new CRUDService<EntityDocument, Entity>(EntityModel);
