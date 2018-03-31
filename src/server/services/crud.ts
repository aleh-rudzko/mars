import { Model, Document } from "mongoose";
import { CrudTypeNotFound } from "../errors";
import BaseModel from "../interfaces/base";


export interface ICrudService<TDocument extends Document & TIInstance, TIInstance extends BaseModel> {
    all(): Promise<TIInstance[]>;

    create(instance: TIInstance): Promise<TIInstance>;

    get(id: string): Promise<TIInstance>;

    update(instance: TIInstance): Promise<TIInstance>;

    remove(id: string): Promise<TIInstance>;
}

export interface ICrudMongooseService<TIInstance> extends ICrudService<Document & TIInstance, TIInstance> {}

export default class CrudService<TDocument extends Document & TIInstance, TIInstance extends BaseModel>
        implements ICrudService<TDocument, TIInstance> {

    model: Model<TDocument>;

    constructor(model: Model<TDocument>) {
        this.model = model;
    }

    async all(): Promise<TIInstance[]> {
        return this.model.find();
    }

    async create(instance: TIInstance): Promise<TIInstance> {
        return this.model.create(instance);
    }

    async get(id: string): Promise<TIInstance> {
        const instance = await this.model.findById(id);
        if (!instance) {
            return Promise.reject(new CrudTypeNotFound<TIInstance>());
        }
        return instance;
    }

    async update(instance: TIInstance): Promise<TIInstance> {
        instance = await this.model.findByIdAndUpdate(instance.id, instance, { "new": true });
        if (!instance) {
            return Promise.reject(new CrudTypeNotFound<TIInstance>());
        }
        return instance;
    }

    async remove(id: string): Promise<TIInstance> {
        const instance = await this.model.findByIdAndRemove(id);
        if (!instance) {
            return Promise.reject(new CrudTypeNotFound<TIInstance>());
        }
        return instance;
    }
}