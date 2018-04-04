import { TypeDocument } from "../models/type";
import { Model } from "mongoose";
import { EntityDocument } from "../models/entity";
import { PropertyAddressDocument } from "../models/propertyAddress";

export interface Models {
    type: Model<TypeDocument>;
    entity: Model<EntityDocument>;
    propertyAddress: Model<PropertyAddressDocument>;
}
