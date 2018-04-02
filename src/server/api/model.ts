import CRUDAPI from "./crud";
import { ModelService } from "../services/model";

const modelAPI = CRUDAPI(ModelService);

export default modelAPI;
