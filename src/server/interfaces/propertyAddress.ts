import BaseModel from "./base";

export interface PropertyAddress extends BaseModel {
    street: string;
    city: string;
    country?: string;
}
