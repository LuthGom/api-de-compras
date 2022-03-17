const Usuario = require("../models/Usuario");
const bcrypt = require("bcrypt");

class UsuariosControllers {
    static async cadastrarUsuario(req, res) {
        try {
            const { nome, apelido, email, senha, cpf, telefone, endereco, cep, cidade, uf, complemento } = req.body;
            const senhaHash = await bcrypt.hash(senha, 12);
            const novoUsuario = new Usuario({ nome, apelido, email, senha: senhaHash, cpf, telefone, endereco, cep, cidade, uf, complemento });
            await novoUsuario.cadastrarUsuario();
            return res.status(200).json(novoUsuario)
        } catch (error) {
            return res.status(200).json({
                message: error.message,
                erro: true,
            })
        }
    }
    static async listarTodosOsUsuarios(req, res) {
        try {
            const resposta = await Usuario.listarTodosOsUsuarios();

            res.status(200).json(resposta);
        } catch (error) {
            res.status(400).json({
                message: error.message,
                error: true,
            });
        }
    };
    static async listarUsuarioPorId(req, res) {
        const id = req.params.id;
        try {
            const resposta = await Usuario.listarUsuarioPorId(id);
            res.status(200).json({ usuario: resposta });
        } catch (error) {
            res.status(400).json({
                message: error.message,
                error: true,
            });
        }
    }
    static async login(req, res) {
        try {
            const { email, senha } = req.body;
            const login = await Usuario.buscarUsuarioPorEmail(email);
            const senhaHashed = await bcrypt.compare(senha, login.senha)
            if (!login || senhaHashed === false) {
                return res.status(400).json({
                    message: "Email ou senha inválidas!",
                    error: true,
                });
            }
            res.status(200).json({
                error: false,
                usuario: {
                    id: login.id,
                    nome: login.nome,
                    apelido: login.apelido,
                    email: login.email,
                    senha: login.senha,
                    cpf: login.cpf,
                    telefone: login.telefone,
                    endereco: login.endereco,
                    cep: login.cep,
                    cidade: login.cidade,
                    uf: login.uf,
                    complemento: login.complemento,
                },
            });
        } catch (error) {
            res.status(500).json({
                message: error.message,
                error: true,
            });
        }
    }
    static async atualizarUsuario(req, res) {
        try {
            const email = req.params.email;
            const body = req.body;
            const cadastroAntigo = await Usuario.buscarUsuarioPorEmail(email);
            const novaSenhaHashed = await bcrypt.hash(req.body.senha, 10);
            // console.log(senha);
            if (cadastroAntigo) {
                const cadastroAtualizado = [
                    body.nome || cadastroAntigo.nome,
                    body.apelido || cadastroAntigo.apelido,
                    body.email || cadastroAntigo.email,
                    body.cpf || cadastroAntigo.cpf,
                    body.telefone || cadastroAntigo.telefone,
                    body.cep || cadastroAntigo.cep,
                    body.endereco || cadastroAntigo.endereco,
                    body.cidade || cadastroAntigo.cidade,
                    body.uf || cadastroAntigo.uf,
                    body.complemento || cadastroAntigo.complemento,
                    body.senha ? novaSenhaHashed : cadastroAntigo.senha, 
                ];
                await Usuario.atualizarUsuario(email, cadastroAtualizado)
                res.status(200).json({ usuarioAtualizado: cadastroAtualizado });
            } else {
                res.json({
                    mensagem: `Usuário com email ${email} não encontrado`,
                    error: true,
                });
            }
        } catch (error) {
            console.log(error);
            res.json({
                mensagem: error.message,
                error: true,
            });
        }
    };
    static async deletarUsuario(req, res) {
        try {
            const email = req.params.email;
            await Usuario.deletarUsuario(email);
            res.status(200).json({
                resposta: `Usuario de email ${email} deletado!`,
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

module.exports = UsuariosControllers;