import { Model, model, Document } from "mongoose";
import IModel from "../interfaces/model";
import ModelSchema from "../shemas/model";


export interface IModelDocument extends Document, IModel { }

export const ModelModel: Model<IModelDocument> = model<IModelDocument>("Model", ModelSchema);
