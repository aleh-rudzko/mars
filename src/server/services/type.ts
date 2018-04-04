import CRUDService, { MongooseCRUDService } from "./crud";
import { Type } from "../interfaces/type";
import { TypeDocument, TypeModel } from "../models/type";

interface TypeCRUDService extends MongooseCRUDService<Type> {}

export const TypeService: TypeCRUDService = new CRUDService<TypeDocument, Type>(TypeModel);
