import { Model, model, Schema, Document } from "mongoose";
import { PropertyAddress } from "../interfaces/propertyAddress";

const PropertyAddressSchema = new Schema({
    street: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true,
    },
    country: {
        type: String,
        required: false,
        default: "Беларусь",
        trim: true
    }
}, {
    timestamps: true,
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
});

PropertyAddressSchema.pre("findByIdAndUpdate", function(next) {
    this.updatedAt = Date.now();
    next();
});

export interface PropertyAddressModel extends Document, PropertyAddress { }

let addressModel: Model<PropertyAddressModel>;

export function getPropertyAddressModel(): Model<PropertyAddressModel> {
    if (!addressModel) {
        addressModel = model<PropertyAddressModel>("PropertyAddress", PropertyAddressSchema);
    }
    return addressModel;
}
