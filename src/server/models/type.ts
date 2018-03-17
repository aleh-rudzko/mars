import { Model, model, Schema, Document } from "mongoose";

const TypeSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: String
});

export interface Type extends Document {
    name: string;
    description: string;
}

let TypeModel: Model<Type>;

export function getTypeModel(): Model<Type> {
    if (!TypeModel) {
        TypeModel = model<Type>("Type", TypeSchema);
    }
    return TypeModel;
}
