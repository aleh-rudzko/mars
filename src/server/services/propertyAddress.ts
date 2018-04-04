import { PropertyAddress } from "../interfaces/propertyAddress";
import { PropertyAddressDocument, PropertyAddressModel } from "../models/propertyAddress";
import CRUDService, { CRUDMongooseService } from "./crud";

interface ModelService extends CRUDMongooseService<PropertyAddress> {}

export const PropertyAddressService: ModelService =
    new CRUDService<PropertyAddressDocument, PropertyAddress>(PropertyAddressModel);
