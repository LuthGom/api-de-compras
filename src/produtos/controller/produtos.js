const Produto = require("../model/Produto");

class ProdutosControllers {
    static async cadastrarProduto(req, res) {
        try {
            const { titulo, subtitulo, descricao, url_imagens } = req.body;
            const NovoProduto = new Produto({ titulo, subtitulo, descricao, url_imagens });
            await NovoProduto.cadastrarProduto();
            return res.status(200).json(NovoProduto)
        } catch (error) {
            return res.status(200).json({
                message: error.message,
                erro: true,
            })
        }
    }
    static async listarTodosOsProdutos(req, res) {
        try {
            const resposta = await Produto.listarTodosOsProdutos();

            res.status(200).json(resposta);
        } catch (error) {
            res.status(400).json({
                message: error.message,
                error: true,
            });
        }
    };
    static async listarProdutoPorId(req, res) {
        const id = req.params.id;
        try {
            const resposta = await Produto.listarProdutoPorId(id);
            res.status(200).json({ Produto: resposta });
        } catch (error) {
            res.status(400).json({
                message: error.message,
                error: true,
            });
        }
    }
    static async atualizarProduto(req, res) {
        try {
            const id = req.params.id;
            const body = req.body;
            const cadastroAntigo = await Produto.listarProdutoPorId(id);

            if (cadastroAntigo) {
                const cadastroAtualizado = [
                    body.titulo || cadastroAntigo.titulo,
                    body.subtitulo || cadastroAntigo.titulo,
                    body.descricao || cadastroAntigo.descricao,
                    body.url_imagens || cadastroAntigo.url_imagens,
                ]
                await Produto.atualizarProduto(id, cadastroAtualizado)
                res.status(200).json({ ProdutoAtualizado: cadastroAtualizado });
            } else {
                res.json({
                    mensagem: `Produto de id ${id} não encontrado`,
                    error: true,
                });
            }
        } catch (error) {
            res.json({
                mensagem: error.message,
                error: true,
            });
        }
    };
    static async deletarProduto(req, res) {
        try {
            const id = req.params.id;
            await Produto.deletarProduto(id);
            res.status(200).json({
                resposta: `Produto de id ${id} deletado!`,
                erro: false
            });
        } catch (error) {
            res.status(404).json({
                mensagem: error.message,
                erro: true,
            });
        }
    };
};

module.exports = ProdutosControllers;