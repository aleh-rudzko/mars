import CRUDAPI from "../common/crud.api";
import { TypeService } from "./type.service";

const entityAPI = CRUDAPI(TypeService);

export default entityAPI;
