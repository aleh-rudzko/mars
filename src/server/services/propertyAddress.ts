import { PropertyAddress } from "../interfaces/propertyAddress";
import { PropertyAddressDocument, PropertyAddressModel } from "../models/propertyAddress";
import CRUDService, { MongooseCRUDService } from "./crud";

interface PropertyAddressCRUDService extends MongooseCRUDService<PropertyAddress> {}

export const PropertyAddressService: PropertyAddressCRUDService =
    new CRUDService<PropertyAddressDocument, PropertyAddress>(PropertyAddressModel);
