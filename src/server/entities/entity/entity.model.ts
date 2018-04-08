import { Model, model, Document } from "mongoose";
import {Entity} from "./entity.interface";
import EntitySchema from "./entity.schema";

export interface EntityDocument extends Document, Entity { }

export const EntityModel: Model<EntityDocument> = model<EntityDocument>("Entity", EntitySchema);
