const { Router } = require("express");
const produtosControllers = require("../produtos/controller/produtosMasculinos");
const router = Router();

module.exports =
    router
        .post('/produto/masculino', produtosControllers.cadastrarProduto)
        .get('/produtos/masculinos', produtosControllers.listarTodosOsProdutos)
        .get('/produto/masculino/:id', produtosControllers.listarProdutoPorId)
        .patch('/produto/masculino/:id', produtosControllers.atualizarProduto)
        .delete('/produto/masculino/:id', produtosControllers.deletarProduto)


