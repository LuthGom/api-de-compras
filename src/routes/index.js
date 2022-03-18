const usuariosRoutes = require('./usuariosRoutes');
const produtosRoutes = require('./produtosRoutes');
const express = require('express')
module.exports = (app) => {
    app.use(usuariosRoutes, produtosRoutes)
};