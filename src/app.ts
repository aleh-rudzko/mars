import * as express from "express";
import typeRoutes from "./api/type";
import setUpConnection from "./utils/databaseUtil";
import * as bodyParser from "body-parser";
import * as logger from "morgan";
import * as path from "path";
const errorHandler = require("errorhandler");

setUpConnection();

const app = express();

app.use('/node_modules',  express.static(path.join(process.cwd(), 'node_modules')));
app.use("/out", express.static(path.join(process.cwd(), 'out')));
app.use(express.static(path.join(process.cwd(), 'views')));


app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", (req, res) => {
    res.sendFile('index.html', {root: path.join(process.cwd(), "/views")});
});

app.use('/v1/types', typeRoutes);

app.use(errorHandler());

app.listen(3000, () => {
    console.log("Server is up and running on port 3000")
});