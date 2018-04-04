import CRUDAPI from "../common/crud.api";
import { ModelService } from "./model.service";

const modelAPI = CRUDAPI(ModelService);

export default modelAPI;
