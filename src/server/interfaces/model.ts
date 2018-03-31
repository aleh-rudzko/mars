import BaseModel from "./base";

export default interface IModel extends BaseModel {
    id?: any;
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
}
