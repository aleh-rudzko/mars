import { Model, model, Schema, Document } from "mongoose";

const TypeSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: String
});

export interface Type {
    name: string;
    description: string;
}

export interface TypeModel extends Document, Type {

}

let typeModel: Model<TypeModel>;

export function getTypeModel(): Model<TypeModel> {
    if (!typeModel) {
        typeModel = model<TypeModel>("Type", TypeSchema);
    }
    return typeModel;
}
