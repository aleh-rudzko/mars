import { Model, model, Document } from "mongoose";
import TypeSchema from "./type.schema";
import { Type } from "./type.interface";

export interface TypeDocument extends Document, Type { }

export const TypeModel: Model<TypeDocument> = model<TypeDocument>("Type", TypeSchema);
