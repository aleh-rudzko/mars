import { Schema } from "mongoose";

const ModelSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
}, { timestamps: true });

ModelSchema.set("toJSON", {
    virtuals: true
});

ModelSchema.pre("findByIdAndUpdate", function(next) {
    this.updatedAt = Date.now();
    next();
});

export default ModelSchema;
