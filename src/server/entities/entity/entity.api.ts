import CRUDAPI from "../common/crud.api";
import { EntityService } from "./entity.service";

const entityAPI = CRUDAPI(EntityService);

export default entityAPI;
