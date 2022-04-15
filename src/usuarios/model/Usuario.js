const Validacoes = require('../../services/Validacoes');
const UsuariosDao = require('../Dao/UsuariosDao');
class Usuario {
    constructor(novoUsuario) {
        this.nome = novoUsuario.nome;
        this.apelido = novoUsuario.apelido;
        this.email = novoUsuario.email;
        this.senha = novoUsuario.senha;

        this.todasAsValidacoes();
    }

    async cadastrarUsuario() {
        if (!await Usuario.buscarUsuarioPorEmail(this.email)) {
            return UsuariosDao.cadastrarUsuario(this)
        } else {
            throw new Error(`O usuário de email ${this.email} já está cadastrado!`)
        }
    }
    static listarTodosOsUsuarios() {
        return UsuariosDao.listarTodosOsUsuarios();
    }
    static async listarUsuarioPorId(id) {
        const usuario = UsuariosDao.listarUsuarioPorId(id)
        if (!usuario) {
            throw new Error("Usuário não cadastrado!")
        }
        return usuario;
    }
    static async buscarUsuarioPorEmail(email) {
        const usuario = await UsuariosDao.buscaPorEmail(email)
        if (!usuario) {
            return null;
        }
        return usuario;
    }
    static async atualizarUsuario(email, usuario) {
        if (await Usuario.buscarUsuarioPorEmail(email)) {
            await UsuariosDao.atualizarUsuario(email, usuario)
        }
        else { throw new Error(`O usuário de email ${this.email} não está cadastrado!`) }
    }
    static async deletarUsuario(email) {
        if (await Usuario.buscarUsuarioPorEmail(email)) {
            await UsuariosDao.deletarUsuario(email);
        }
        else { throw new Error(`O usuário de email ${email} não está cadastrado!`) }
    }
    todasAsValidacoes() {
        this.autenticacaoNome();
        this.autenticacaoEmail();
    }
    autenticacaoNome() {
        Validacoes.autenticacaoNome(this.nome)
    }

    autenticacaoEmail() {
        Validacoes.autenticacaoEmail(this.email)
    }

};

module.exports = Usuario;