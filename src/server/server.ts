import * as express from "express";
import typeRoutes from "./api/type";
import { setUpDBConnection } from "./utils/databaseUtil";
import * as bodyParser from "body-parser";
import * as logger from "morgan";
import * as path from "path";
const swaggerUi = require("swagger-ui-express");
const resolveRefs = require("json-refs").resolveRefs;

import config from "./etc/config";
import errorHandler from "./middleware/errorHandler";
import entityRoutes from "./api/entity";
import modelAPI from "./api/model";
import propertyAddressAPI from "./api/propertyAddress";

export default class Server {
    public app: express.Application;

    // public models: Models;

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

        this.setUpSwagger();

        this.app.use(logger("dev"));
        this.app.use(bodyParser.json());

        this.app.use(bodyParser.urlencoded({
            extended: true
        }));

        setUpDBConnection();

        // TODO: remake logic. Put models in request
        // this.models = {
        //     type: getTypeModel(),
        //     entity: getEntityModel(),
        //     propertyAddress: getPropertyAddressModel()
        // };
    }

    public setUpSwagger() {
        const root = require("../../swagger/swagger.json");
        const options = {
            location: "swagger"
        };

        resolveRefs(root, options).then(results => {
            this.app.use("/docs", swaggerUi.serve, swaggerUi.setup(results.resolved));
        });

    }

    public routes() {
        this.app.get("/", (req, res) => {
            res.sendFile("index.html", {root: path.join(process.cwd(), "/public")});
        });
    }

    public api() {
        this.app.use("/api/v1/types", typeRoutes);
        this.app.use("/api/v1/models", modelAPI);
        this.app.use("/api/v1/entities", entityRoutes);
        this.app.use("/api/v1/addresses", propertyAddressAPI);

        this.app.use(errorHandler);
    }
}
