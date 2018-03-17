import { setUpConnection, closeConnection } from "../server/utils/databaseUtil";
import * as mongoose from "mongoose";
import { getTypeModel } from "../server/models/type";

before(async () => {
    await setUpConnection();
});

beforeEach(async () => {
    await getTypeModel().collection.drop();
});

after(async () => {
    await closeConnection();
});
