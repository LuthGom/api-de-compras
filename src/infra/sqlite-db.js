const sqlite3 = require('sqlite3');
const path = require('path');
sqlite3.verbose();
const caminhoBd = path.resolve(__dirname, 'database.db')

const bd = new sqlite3.Database(caminhoBd);

const USUARIOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "Usuarios"(
    "id" INTEGER PRIMARY KEY AUTOINCREMENT, 
    "nome" VARCHAR(64),
    "apelido" varchar(64),
    "email" varchar(64),
    "senha" varchar(64),
    "cpf" varchar(11),
    "telefone" INTEGER,
    "endereco" varchar(64),
    "cep" INTEGER,
    "cidade" varchar(64),
    "uf" varchaar(4),
    "complemento" varchar(64)
    
)`;
function criaTabelaDeUsuarios() {
    bd.run(USUARIOS_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de Usuarios");
    });
}

bd.serialize(() => {
    criaTabelaDeUsuarios();
})

module.exports =  bd;