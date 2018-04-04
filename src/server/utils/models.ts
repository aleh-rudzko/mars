import { TypeDocument } from "../entities/type/type.model";
import { Model } from "mongoose";
import { EntityDocument } from "../entities/entity/entity.model";
import { PropertyAddressDocument } from "../entities/propertyAddress/propertyAddress.model";

export interface Models {
    type: Model<TypeDocument>;
    entity: Model<EntityDocument>;
    propertyAddress: Model<PropertyAddressDocument>;
}
