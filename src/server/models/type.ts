import { Model } from "mongoose";
import { Schema } from "mongoose";
import { model } from "mongoose";
import { Document } from "mongoose";

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

export const TypeModel: Model<Type> = model<Type>("Type", TypeSchema);
