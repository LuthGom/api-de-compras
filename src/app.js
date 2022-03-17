const express =require( "express");
const cors = require("cors");
const routes = require('./routes/usuariosRoutes');
const app = express();

const bd = require('./infra/sqlite-db')

app.use(express.json());
app.use(cors());
app.get( (req, res, next) => {
    next()
})
routes(app)
module.exports =  app;