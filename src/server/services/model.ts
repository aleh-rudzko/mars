import CrudService, { ICrudMongooseService } from "./crud";
import { IModelDocument, ModelModel } from "../models/model";
import IModel from "../interfaces/model";

interface IModelService extends ICrudMongooseService<IModel> {}

export const ModelService: IModelService = new CrudService<IModelDocument, IModel>(ModelModel);
