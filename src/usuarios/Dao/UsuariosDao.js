const db = require('../../infra/sqlite-db');

module.exports = class UsuariosDao {
    static cadastrarUsuario(novoUsuario) {
        const INSERT_INTO_Usuarios = `INSERT INTO Usuarios (nome, apelido, email, cpf, telefone, endereco, cep, cidade, uf, complemento, senha) VALUES (?,?,?,?,?,?,?,?,?,?,?);`
        return new Promise((resolve, reject) => {
            db.all(INSERT_INTO_Usuarios,
                [...Object.values(novoUsuario)],
                (error, rows) => {
                    if (error) {
                        reject({
                            "mensagem": error.message,
                            "erro": true
                        })
                    }
                    return resolve({ "usuario": rows });
                })
        })
    }
    static listarTodosOsUsuarios() {
        const SELECT_ALL = 'SELECT * FROM Usuarios;';
        return new Promise((resolve, reject) => {
            db.all(SELECT_ALL, (error, rows) => {

                if (error) {
                    reject({
                        "mensagem": error.message,
                        "error": true
                    })
                } else {
                    resolve({
                        "usuarios": rows,
                        "error": false
                    })
                }
            })
        })
    } static listarUsuarioPorId(id) {
        const SELECT_BY_ID = `SELECT * FROM Usuarios WHERE ID = ?`
        return new Promise((resolve, reject) => {
            db.all(SELECT_BY_ID, id, (error, rows) => {
                if (error) {
                    reject({
                        "mensagem": error.message,
                        "erro": true
                    })
                } else {
                    resolve({
                        "usuario": rows,
                        "erro": false
                    })
                }
            })
        })
    }
    static atualizarUsuario(email, usuario) {

        return new Promise((resolve, reject) => {
            const UPDATE = `
                UPDATE Usuarios
                SET nome = ?, apelido = ?, email = ?, cpf = ?, telefone = ?, endereco = ?, cep = ?, cidade = ?, uf = ?, complemento = ?, senha = ? WHERE email = ?;`;
            const values = [...usuario, email];
            db.run(UPDATE,
                values, (error) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve({
                            "mensagem": `Usuário de email ${email} atualizado com sucesso.`,
                            "usuario": usuario,
                            "erro": false
                        })
                    }
                })
        })

    }
    static deletarUsuario(email) {
        return new Promise((resolve, reject) => {
            const deletar = `DELETE FROM Usuarios WHERE email = ?`
            db.run(deletar, email, (error) => {
                if (error) {
                    reject({
                        "mensagem": error.message,
                        "error": true
                    })
                } else {
                    resolve({
                        "mensagem": `Usuário de email ${email} excluído com sucesso!`,
                        "erro": false
                    })
                }
            })
        })
    }
    static buscaPorEmail(email) {
        const SELECT_BY_EMAIL = `SELECT * FROM Usuarios WHERE email = ?`
        return new Promise((resolve, reject) => {
            db.get(SELECT_BY_EMAIL, email, (error, rows) => {
                if (error) {
                    reject({
                        "mensagem": error.message,
                        "erro": true
                    })
                } else {
                    resolve(rows)
                }
            })
        })
    }
};