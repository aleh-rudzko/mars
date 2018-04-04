import CRUDAPI from "./crud";
import { TypeService } from "../services/type";

const entityAPI = CRUDAPI(TypeService);

export default entityAPI;
