import { Model, model, Document } from "mongoose";
import { Type } from "../interfaces/type";
import TypeSchema from "../shemas/type";


export interface TypeModel extends Document, Type { }

let typeModel: Model<TypeModel>;

export function getTypeModel(): Model<TypeModel> {
    if (!typeModel) {
        typeModel = model<TypeModel>("Type", TypeSchema);
    }
    return typeModel;
}
