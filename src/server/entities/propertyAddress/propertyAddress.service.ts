import { PropertyAddress } from "./propertyAddress.interface";
import { PropertyAddressDocument, PropertyAddressModel } from "./propertyAddress.model";
import CRUDService, { MongooseCRUDService } from "../common/crud.service";

interface PropertyAddressCRUDService extends MongooseCRUDService<PropertyAddress> {}

export const PropertyAddressService: PropertyAddressCRUDService =
    new CRUDService<PropertyAddressDocument, PropertyAddress>(PropertyAddressModel);
