const { Router } = require("express");
const comprasControllers = require("../compras/controller/compras");
const router = Router();

module.exports =
 router
.post('/compra', comprasControllers.cadastrarCompra)
.get('/compras', comprasControllers.listarTodasAsCompras)
.get('/compra/:id', comprasControllers.listaCompraPorId)