import { Schema } from "mongoose";

const TypeSchema = new Schema({
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

TypeSchema.pre("findByIdAndUpdate", function(next) {
    this.updatedAt = Date.now();
    next();
});

export default TypeSchema;
