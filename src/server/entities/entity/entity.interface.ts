import BaseModel from "../common/base.interface";

export interface Entity extends BaseModel {
    name: string;
    description: string;
}
