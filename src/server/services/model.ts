import CRUDService, { CRUDMongooseService } from "./crud";
import { ModelDocument, ModelModel } from "../models/model";
import Model from "../interfaces/model";

interface ModelService extends CRUDMongooseService<Model> {}

export const ModelService: ModelService = new CRUDService<ModelDocument, Model>(ModelModel);
