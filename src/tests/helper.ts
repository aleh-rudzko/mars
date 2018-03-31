import { closeConnection, setUpDBConnection } from "../server/utils/databaseUtil";
import * as mongoose from "mongoose";
import { getTypeModel } from "../server/models/type";

before(async () => {
    await setUpDBConnection();
});

after(async () => {
    await closeConnection();
});
