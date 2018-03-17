import * as mongoose from "mongoose";
import config from "../etc/config";

export async function setUpConnection() {
    mongoose.connect(`${config.database.url}/${config.database.name}`);

    const db = mongoose.connection;

    db.on("error", () => {
        console.error("Connection error"); // tslint:disable-line
    });
    db.once("open", function() {
        console.log("We are connected to test database!"); // tslint:disable-line
    });

    db.on("disconnected", function() {
        console.log("Connection disconnected"); // tslint:disable-line
    });
}

export async function closeConnection() {
    await mongoose.connection.close();
}
