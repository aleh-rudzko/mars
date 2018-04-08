import BaseModel from "../common/base.interface";

export interface PropertyAddress extends BaseModel {
    street: string;
    city: string;
    country?: string;
}
