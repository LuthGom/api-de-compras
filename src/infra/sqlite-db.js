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
    "cpf" varchar(11),
    "telefone" INTEGER,
    "endereco" varchar(64),
    "cep" INTEGER,
    "cidade" varchar(64),
    "uf" varchaar(4),
    "complemento" varchar(64),
    "senha" varchar(64)
    
)`;

const PRODUTOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "Produtos"(
    "id" INTEGER PRIMARY KEY AUTOINCREMENT, 
    "titulo" varchar(255),
    "subtitulo" varchar(255),
    "descricao" varchar(2555),
    "url_imagens" varchar(2555)
)`;
function criaTabelaDeUsuarios() {
    bd.run(USUARIOS_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de Usuarios");
    });
}
function criaTabelaDeProdutos() {
    bd.run(PRODUTOS_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de Produtos");
    });
}

bd.serialize(() => {
    criaTabelaDeUsuarios();
    criaTabelaDeProdutos();
})

module.exports =  bd;