import CRUDAPI from "../common/crud.api";
import { PropertyAddressService } from "./propertyAddress.service";

const propertyAddressAPI = CRUDAPI(PropertyAddressService);

export default propertyAddressAPI;
