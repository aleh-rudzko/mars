import BaseModel from "./base";

export interface Entity extends BaseModel {
    name: string;
    description: string;
}
