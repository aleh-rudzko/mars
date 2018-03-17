import * as express from "express";
import typeRoutes from "./api/type";
import { closeConnection, setUpConnection } from "./utils/databaseUtil";
import * as bodyParser from "body-parser";
import * as logger from "morgan";
import * as path from "path";
import config from "./etc/config";
const errorHandler = require("errorhandler");

setUpConnection();

const app = express();

app.use("/node_modules",  express.static(path.join(process.cwd(), "node_modules")));
app.use("/public", express.static(path.join(process.cwd(), "public")));

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", (req, res) => {
    res.sendFile("index.html", {root: path.join(process.cwd(), "/public")});
});

app.use("/v1/types", typeRoutes);

app.use(errorHandler());

app.listen(config.server.port, () => {
    console.log("Server is up and running on port 3000"); // tslint:disable-line
});

process.on("uncaughtException", (err) => {
    console.error(err, "uncaughtException occurred. Server continuing to work"); // tslint:disable-line
    closeConnection();
});

process.on("unhandledRejection", (err, promise) => {
    console.error(err, "unhandledRejection", promise); // tslint:disable-line
    closeConnection();
});
