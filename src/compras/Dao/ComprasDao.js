const db = require('../../infra/sqlite-db');

module.exports = class ComprasDao {
    static CadastrarNovaCompra(novaCompra) {
        const INSERT_INTO_LISTADECOMPRAS = `INSERT INTO ListaDeCompras (usuario, lista_de_produtos  ) VALUES (?,?);`
        return new Promise((resolve, reject) => {
            db.all(INSERT_INTO_LISTADECOMPRAS,
                [...Object.values(novaCompra)],
                (error, rows) => {
                    if (error) {
                        console.log(error);
                        reject({
                            "mensagem": error.message,
                            "erro": true
                        })
                    }
                    return resolve({ "ListaDeCompras": rows });
                })
        })
    }
    static ListarTodasAsCompras() {
        const SELECT_ALL = 'SELECT * FROM ListaDeCompras;';
        return new Promise((resolve, reject) => {
            db.all(SELECT_ALL, (error, rows) => {

                if (error) {
                    reject({
                        "mensagem": error.message,
                        "error": true
                    })
                } else {
                    resolve({
                        "Compras": rows,
                        "error": false
                    })
                }
            })
        })
    }
    static ListarCompraPorId(id) {
        const SELECT_BY_ID = `SELECT * FROM ListaDeCompras WHERE id = ?`
        return new Promise((resolve, reject) => {
            db.all(SELECT_BY_ID, id, (error, rows) => {
                if (error) {
                    reject({
                        "mensagem": error.message,
                        "erro": true
                    })
                } else {
                    resolve({
                        "ListaDeCompras": rows,
                        "erro": false
                    })
                }
            })
        })
    }
}