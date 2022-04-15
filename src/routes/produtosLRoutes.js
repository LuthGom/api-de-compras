const { Router } = require("express");
const produtosControllers = require("../produtos/controller/produtosLgbt");
const router = Router();

module.exports =
    router
        .post('/produto/lgbt', produtosControllers.cadastrarProduto)
        .get('/produtos/lgbt', produtosControllers.listarTodosOsProdutos)
        .get('/produto/lgbt/:id', produtosControllers.listarProdutoPorId)
        .patch('/produto/lgbt/:id', produtosControllers.atualizarProduto)
        .delete('/produto/lgbt/:id', produtosControllers.deletarProduto)


