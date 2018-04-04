import { Model, Document } from "mongoose";
import { CrudTypeNotFound } from "../errors";
import BaseModel from "../interfaces/base";

export interface CRUDServiceBase<TDocument extends Document & TInstance, TInstance extends BaseModel> {
    all(): Promise<TInstance[]>;

    create(instance: TInstance): Promise<TInstance>;

    get(id: string): Promise<TInstance>;

    update(instance: TInstance): Promise<TInstance>;

    remove(id: string): Promise<TInstance>;
}

export interface MongooseCRUDService<TInstance> extends CRUDServiceBase<Document & TInstance, TInstance> {}

export default class CRUDService<TDocument extends Document & TInstance, TInstance extends BaseModel>
        implements CRUDServiceBase<TDocument, TInstance> {

    protected model: Model<TDocument>;

    constructor(model: Model<TDocument>) {
        this.model = model;
    }

    public async all(): Promise<TInstance[]> {
        return this.model.find();
    }

    public async create(instance: TInstance): Promise<TInstance> {
        return this.model.create(instance);
    }

    public async get(id: string): Promise<TInstance> {
        const instance = await this.model.findById(id);
        if (!instance) {
            return Promise.reject(new CrudTypeNotFound<TInstance>());
        }
        return instance;
    }

    public async update(instance: TInstance): Promise<TInstance> {
        instance = await this.model.findByIdAndUpdate(instance.id, instance, { "new": true });
        if (!instance) {
            return Promise.reject(new CrudTypeNotFound<TInstance>());
        }
        return instance;
    }

    public async remove(id: string): Promise<TInstance> {
        const instance = await this.model.findByIdAndRemove(id);
        if (!instance) {
            return Promise.reject(new CrudTypeNotFound<TInstance>());
        }
        return instance;
    }
}
