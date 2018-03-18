import { Model, model, Schema, Document } from "mongoose";
import { Type } from "../interfaces/type";

const TypeSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: String,
    createdAt: Date,
    updatedAt: Date
});

TypeSchema.set("toJSON", {
    virtuals: true
});

TypeSchema.pre("save", function(next) {
    const now = Date.now();

    if (this.isNew) {
        this.createdAt = now;
    }
    this.updatedAt = now;

    next();
});

TypeSchema.pre("update", function(next) {
    this.updatedAt = Date.now();
    next();
});

export interface TypeModel extends Document, Type { }

let typeModel: Model<TypeModel>;

export function getTypeModel(): Model<TypeModel> {
    if (!typeModel) {
        typeModel = model<TypeModel>("Type", TypeSchema);
    }
    return typeModel;
}
