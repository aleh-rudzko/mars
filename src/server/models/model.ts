import { Model as MongooseModel, model, Document } from "mongoose";
import Model from "../interfaces/model";
import ModelSchema from "../schemas/model";

export interface ModelDocument extends Document, Model { }

export const ModelModel: MongooseModel<ModelDocument> = model<ModelDocument>("Model", ModelSchema);
