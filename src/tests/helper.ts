import { setUpConnection, closeConnection } from "../server/utils/databaseUtil";
import * as mongoose from "mongoose";
import { getTypeModel } from "../server/models/type";

before(async () => {
    await setUpConnection();
});

after(async () => {
    await closeConnection();
});
