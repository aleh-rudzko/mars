import { Model, model, Document } from "mongoose";
import {Entity} from "../interfaces/entity";
import EntitySchema from "../schemas/entity";

export interface EntityDocument extends Document, Entity { }

export const EntityModel: Model<EntityDocument> = model<EntityDocument>("Entity", EntitySchema);
