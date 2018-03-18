import { TypeModel } from "../models/type";
import { Model } from "mongoose";

export interface Models {
    type: Model<TypeModel>;
}
