import { Model, model, Schema, Document } from "mongoose";
import {Entity} from "../interfaces/entity";

const EntitySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: String,
}, {
    timestamps: true,
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
});

EntitySchema.pre("findByIdAndUpdate", function(next) {
    this.updatedAt = Date.now();
    next();
});

export interface EntityModel extends Document, Entity { }

let entityModel: Model<EntityModel>;

export function getEntityModel(): Model<EntityModel> {
    if (!entityModel) {
        entityModel = model<EntityModel>("Entity", EntitySchema);
    }
    return entityModel;
}
