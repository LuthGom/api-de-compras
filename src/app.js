const express = require("express");
const cors = require("cors");
const routes = require('./routes');
const app = express();

const bd = require('./infra/sqlite-db')

app.use(express.json(), express.urlencoded({
    extended: true
}));
app.use(cors());

routes(app)
module.exports = app;