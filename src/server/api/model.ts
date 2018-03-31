import CrudAPI from "./crud";
import { ModelService } from "../services/model";

const modelAPI = CrudAPI(ModelService);

export default modelAPI;