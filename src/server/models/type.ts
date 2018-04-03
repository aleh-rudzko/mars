import { Model, model, Schema, Document } from "mongoose";
import { Type } from "../interfaces/type";
import TypeSchema from "../schemas/type";

export interface TypeModel extends Document, Type { }

let typeModel: Model<TypeModel>;

export function getTypeModel(): Model<TypeModel> {
    if (!typeModel) {
        typeModel = model<TypeModel>("Type", TypeSchema);
    }
    return typeModel;
}
