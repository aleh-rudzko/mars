import * as express from "express";
import typeRoutes from "./api/type";
import { setUpConnection } from "./utils/databaseUtil";
import * as bodyParser from "body-parser";
import * as logger from "morgan";
import * as path from "path";
import { Models } from "./utils/models";
import { getTypeModel } from "./models/type";
import forwardTo404 from "./middleware/forwardTo404";
const swaggerUi = require("swagger-ui-express");

import config from "./etc/config";

const errorHandler = require("errorhandler");

export default class Server {
    public app: express.Application;

    public models: Models;

    public static bootstrap(): Server {
        return new Server();
    }

    constructor() {
        this.app = express();

        this.config();

        this.routes();

        this.api();
    }

    public config() {
        this.app.set("port", config.server.port);

        this.app.use("/node_modules",  express.static(path.join(process.cwd(), "node_modules")));
        this.app.use("/public", express.static(path.join(process.cwd(), "public")));

        this.app.use("/docs", swaggerUi.serve, swaggerUi.setup(require("../../swagger.json")));

        this.app.use(logger("dev"));
        this.app.use(bodyParser.json());

        this.app.use(bodyParser.urlencoded({
            extended: true
        }));

        setUpConnection();

        this.models = {
            type: getTypeModel()
        };

        this.app.use(forwardTo404);

        this.app.use(errorHandler());
    }

    public routes() {
        this.app.get("/", (req, res) => {
            res.sendFile("index.html", {root: path.join(process.cwd(), "/public")});
        });
    }

    public api() {
        this.app.use("/api/v1/types", typeRoutes);
    }
}
