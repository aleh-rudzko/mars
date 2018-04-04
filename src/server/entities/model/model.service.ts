import CRUDService, { MongooseCRUDService } from "../common/crud.service";
import { ModelDocument, ModelModel } from "./model.model";
import Model from "./model.interface";

interface ModelService extends MongooseCRUDService<Model> {}

export const ModelService: ModelService = new CRUDService<ModelDocument, Model>(ModelModel);
