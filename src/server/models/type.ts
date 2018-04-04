import { Model, model, Document } from "mongoose";
import TypeSchema from "../schemas/type";
import { Type } from "../interfaces/type";

export interface TypeDocument extends Document, Type { }

export const TypeModel: Model<TypeDocument> = model<TypeDocument>("Type", TypeSchema);
