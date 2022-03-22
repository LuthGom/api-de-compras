const ComprasDao = require("../Dao/ComprasDao");

module.exports = class Compras {
    constructor(novaCompra) {
        this.usuario = novaCompra.usuario;
        this.lista = novaCompra.lista_de_produtos;
    }
    static async cadastrarNovaCompra() {

        await ComprasDao.CadastrarNovaCompra(this)

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