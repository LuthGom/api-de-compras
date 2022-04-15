const db = require('../../infra/sqlite-db');

module.exports = class ProdutosDao {
    static cadastrarProduto(novoProduto) {
        const INSERT_INTO_Produtos = `INSERT INTO Produtos_Femininos (titulo, descricao,preco,  url_imagem) VALUES (?,?,?,?);`
        return new Promise((resolve, reject) => {
            db.all(INSERT_INTO_Produtos,
                [...Object.values(novoProduto)],
                (error, rows) => {
                    if (error) {
                        reject({
                            "mensagem": error.message,
                            "erro": true
                        })
                    }
                    return resolve({ "Produto": rows });
                })
        })
    }
    static listarTodosOsProdutos() {
        const SELECT_ALL = 'SELECT * FROM Produtos_Femininos;';
        return new Promise((resolve, reject) => {
            db.all(SELECT_ALL, (error, rows) => {

                if (error) {
                    reject({
                        "mensagem": error.message,
                        "error": true
                    })
                } else {
                    resolve({
                        "Produtos": rows,
                        "error": false
                    })
                }
            })
        })
    } static listarProdutoPorId(id) {
        const SELECT_BY_ID = `SELECT * FROM Produtos_Femininos WHERE id = ?`
        return new Promise((resolve, reject) => {
            db.all(SELECT_BY_ID, id, (error, rows) => {
                if (error) {
                    reject({
                        "mensagem": error.message,
                        "erro": true
                    })
                } else {
                    resolve({
                        "Produto": rows,
                        "erro": false
                    })
                }
            })
        })
    }
    static atualizarProduto(id, produto) {

        return new Promise((resolve, reject) => {
            const UPDATE = `
                UPDATE Produtos_Femininos
                SET titulo = ?, descricao = ?,preco = ?,  url_imagem = ? WHERE id = ?;`;
            const values = [...produto, id];
            db.run(UPDATE,
                values, (error) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve({
                            "mensagem": `Produto de id ${id} atualizado com sucesso.`,
                            "Produto": produto,
                            "erro": false
                        })
                    }
                })
        })

    }
    static deletarProduto(id) {
        return new Promise((resolve, reject) => {
            const deletar = `DELETE FROM Produtos_Femininos WHERE id = ?`
            db.run(deletar, id, (error) => {
                if (error) {
                    reject({
                        "mensagem": error.message,
                        "error": true
                    })
                } else {
                    resolve({
                        "mensagem": `Produto de id ${id} excluído com sucesso!`,
                        "erro": false
                    })
                }
            })
        })
    }
    static buscaProdutoPorTitulo(titulo) {
        const SELECT_BY_TITULO = `SELECT * FROM Produtos_Femininos WHERE titulo = ?`
        return new Promise((resolve, reject) => {
            db.get(SELECT_BY_TITULO, titulo, (error, rows) => {
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