import * as mongoose from "mongoose";
import config from "../etc/config";

export default function setUpConnection() {
    mongoose.connect(`${config.mongo.databaseUrl}/${config.mongo.databaseName}`);
}