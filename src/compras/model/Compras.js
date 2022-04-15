const ComprasDao = require("../Dao/ComprasDao");

module.exports = class Compras {
    constructor(novaCompra) {
        this.usuario = novaCompra.usuario;
        this.lista_de_produtos = novaCompra.lista_de_produtos;
    }
    async cadastrarNovaCompra() {
        const compra = await ComprasDao.CadastrarNovaCompra(this)
        console.log('lista', compra);
        return compra

    }
    static listarTodasAsCompras() {
        return ComprasDao.ListarTodasAsCompras();
    }
    static async listarCompraPorId(id) {
        const lista = ComprasDao.ListarCompraPorId(id)
        if (!lista) {
            throw new Error("Lista não realizada!")
        }
        return lista;
    }
}