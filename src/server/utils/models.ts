import { TypeModel } from "../models/type";
import { Model } from "mongoose";
import { EntityModel } from "../models/entity";
import { PropertyAddressDocument } from "../models/propertyAddress";

export interface Models {
    type: Model<TypeModel>;
    entity: Model<EntityModel>;
    propertyAddress: Model<PropertyAddressDocument>;
}
