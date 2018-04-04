import CRUDAPI from "./crud";
import { EntityService } from "../services/entity";

const entityAPI = CRUDAPI(EntityService);

export default entityAPI;
