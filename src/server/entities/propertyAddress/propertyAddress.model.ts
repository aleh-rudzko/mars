import { Model, model, Document } from "mongoose";
import { PropertyAddress } from "./propertyAddress.interface";
import PropertyAddressSchema from "./propertyAddress.schema";

export interface PropertyAddressDocument extends Document, PropertyAddress { }

export const PropertyAddressModel: Model<PropertyAddressDocument> =
    model<PropertyAddressDocument>("PropertyAddress", PropertyAddressSchema);
