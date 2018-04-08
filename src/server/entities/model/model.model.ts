import { Model as MongooseModel, model, Document } from "mongoose";
import Model from "./model.interface";
import ModelSchema from "./model.schema";

export interface ModelDocument extends Document, Model { }

export const ModelModel: MongooseModel<ModelDocument> = model<ModelDocument>("Model", ModelSchema);
