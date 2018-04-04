import { Model, model, Document } from "mongoose";
import { PropertyAddress } from "../interfaces/propertyAddress";
import PropertyAddressSchema from "../schemas/propertyAddress";

export interface PropertyAddressDocument extends Document, PropertyAddress { }

export const PropertyAddressModel: Model<PropertyAddressDocument> =
    model<PropertyAddressDocument>("PropertyAddress", PropertyAddressSchema);
