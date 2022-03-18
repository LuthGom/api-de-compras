const { Router } = require("express");
const produtosControllers = require("../produtos/controller/produtos");
const router = Router();

module.exports =
    router
        .post('/produto', produtosControllers.cadastrarProduto)
        .get('/produtos', produtosControllers.listarTodosOsProdutos)
        .get('/produtos/:id', produtosControllers.listarProdutoPorId)
        .patch('/produto/:id', produtosControllers.atualizarProduto)
        .delete('/produto/:id', produtosControllers.deletarProduto)


