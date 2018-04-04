import CRUDService, { MongooseCRUDService } from "./crud";
import { ModelDocument, ModelModel } from "../models/model";
import Model from "../interfaces/model";

interface ModelService extends MongooseCRUDService<Model> {}

export const ModelService: ModelService = new CRUDService<ModelDocument, Model>(ModelModel);
