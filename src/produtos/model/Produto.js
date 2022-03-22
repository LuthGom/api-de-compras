const ProdutosDao = require('../Dao/ProdutosDao');
class Produto {
    constructor(novoProduto) {
        this.titulo = novoProduto.titulo;
        this.subtitulo = novoProduto.subtitulo;
        this.descricao = novoProduto.descricao;
        this.url_imagens = novoProduto.url_imagens;
    }

    async cadastrarProduto() {
        if (!await Produto.buscarProdutoPorTitulo(this.subtitulo)) {
            return ProdutosDao.cadastrarProduto(this)
        } else {
            throw new Error(`O produto ${this.subtitulo} já está cadastrado!`)
        }
    }
    static listarTodosOsProdutos() {
        return ProdutosDao.listarTodosOsProdutos();
    }
    static async listarProdutoPorId(id) {
        const produto = ProdutosDao.listarProdutoPorId(id)
        if (!produto) {
            throw new Error("Produto não cadastrado!")
        }
        return produto;
    }
    static async buscarProdutoPorTitulo(subtitulo) {
        const produto = await ProdutosDao.buscaProdutoPorTitulo(subtitulo)
        if (!produto) {
            return null;
        }
        return produto;
    }
    static async atualizarProduto(id, produto) {
        if (await Produto.listarProdutoPorId(id)) {
            await ProdutosDao.atualizarProduto(id, produto)
        }
        else { throw new Error(`O produto de id ${this.id} não está cadastrado!`) }
    }
    static async deletarProduto(id) {
        if (await Produto.listarProdutoPorId(id)) {
            await ProdutosDao.deletarProduto(id);
        }
        else { throw new Error(`O produto de id ${id} não está cadastrado!`) }
    }


};

module.exports = Produto;