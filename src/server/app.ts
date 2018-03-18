import Server from "./server";
import config from "./etc/config";
import * as http from "http";

const app = Server.bootstrap().app;

const httpServer = http.createServer(app);

httpServer.listen(config.server.port);

process.on("uncaughtException", (err) => {
    console.error(err, "uncaughtException occurred. Server continuing to work"); // tslint:disable-line
});

process.on("unhandledRejection", (err, promise) => {
    console.error(err, "unhandledRejection", promise); // tslint:disable-line
});
