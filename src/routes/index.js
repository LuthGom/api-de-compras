const usuariosRoutes = require('./usuariosRoutes');
const comprasRoutes = require("./comprasRoutes")
const produtosFRoutes = require('./produtosFRoutes')
const produtosMRoutes = require('./produtosMRoutes')
const produtosLRoutes = require('./produtosLRoutes')

const express = require('express')
module.exports = (app) => {
    app.use(usuariosRoutes, produtosFRoutes, produtosLRoutes, produtosMRoutes, comprasRoutes)
};