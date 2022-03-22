const usuariosRoutes = require('./usuariosRoutes');
const produtosRoutes = require('./produtosRoutes');
const comprasRoutes = require("./comprasRoutes")
const express = require('express')
module.exports = (app) => {
    app.use(usuariosRoutes, produtosRoutes, comprasRoutes)
};