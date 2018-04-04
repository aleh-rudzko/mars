import CRUDAPI from "./crud";
import { PropertyAddressService } from "../services/propertyAddress";

const propertyAddressAPI = CRUDAPI(PropertyAddressService);

export default propertyAddressAPI;
