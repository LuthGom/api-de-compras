const Compras = require("../model/Compras");

module.exports = class ComprasControllers {
    static async cadastrarCompra(req, res) {
        try {
            const { usuario, lista_de_produtos } = req.body;
            const NovaCompra = new Compras({ usuario, lista_de_produtos });
            await Compras.cadastrarNovaCompra();
            return res.status(200).json(NovaCompra)
        } catch (error) {
            return res.status(200).json({
                message: error.message,
                erro: true,
            })
        }
    }
    static async listarTodasAsCompras(req, res) {
        try {
            const resposta = await Compras.listarTodasAsCompras();

            res.status(200).json(resposta);
        } catch (error) {
            res.status(400).json({
                message: error.message,
                error: true,
            });
        }
    };
    static async listaCompraPorId(req, res) {
        const id = req.params.id;
        try {
            const resposta = await Compras.listarCompraPorId(id);
            res.status(200).json({ Compra: resposta });
        } catch (error) {
            res.status(400).json({
                message: error.message,
                error: true,
            });
        }
    }
}