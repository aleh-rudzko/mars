import { TypeModel } from "../models/type";
import { Model } from "mongoose";
import { EntityModel } from "../models/entity";

export interface Models {
    type: Model<TypeModel>;
    entity: Model<EntityModel>;
}
