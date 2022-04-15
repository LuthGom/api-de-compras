const ProdutosDao = require('../Dao/ProdutosFDao');
class Produto {
    constructor(novoProduto) {
        this.titulo = novoProduto.titulo;
        this.descricao = novoProduto.descricao;
        this.preco = novoProduto.preco;
        this. url_imagem = novoProduto. url_imagem;
    }

    async cadastrarProduto() {
        if (!await Produto.buscarProdutoPorTitulo(this.titulo)) {
            return ProdutosDao.cadastrarProduto(this)
        } else {
            throw new Error(`O produto ${this.titulo} já está cadastrado!`)
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
    static async buscarProdutoPorTitulo(titulo) {
        const produto = await ProdutosDao.buscaProdutoPorTitulo(titulo)
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