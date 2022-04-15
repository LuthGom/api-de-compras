const { Router } = require("express");
const produtosControllers = require("../produtos/controller/produtosFemininos");
const router = Router();

module.exports =
    router
        .post('/produto/feminino', produtosControllers.cadastrarProduto)
        .get('/produtos/femininos', produtosControllers.listarTodosOsProdutos)
        .get('/produto/feminino/:id', produtosControllers.listarProdutoPorId)
        .patch('/produto/feminino/:id', produtosControllers.atualizarProduto)
        .delete('/produto/feminino/:id', produtosControllers.deletarProduto)


