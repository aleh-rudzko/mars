import CRUDService, { MongooseCRUDService } from "../common/crud.service";
import { Type } from "./type.interface";
import { TypeDocument, TypeModel } from "./type.model";

interface TypeCRUDService extends MongooseCRUDService<Type> {}

export const TypeService: TypeCRUDService = new CRUDService<TypeDocument, Type>(TypeModel);
