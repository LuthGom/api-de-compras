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
    "email" varchar(64) NOT NULL UNIQUE,
    "senha" varchar(64)
)`;

const FEMININOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "Produtos_Femininos"(
    "id" INTEGER PRIMARY KEY AUTOINCREMENT, 
    "titulo" varchar(255) NOT NULL,
    "descricao" varchar(2555),
    "preco" decimal(5,2),
    "url_imagem" varchar(2555),
    UNIQUE(titulo)

)`;
const MASCULINOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "Produtos_Masculinos"(
    "id" INTEGER PRIMARY KEY AUTOINCREMENT, 
    "titulo" varchar(255) NOT NULL,
    "descricao" varchar(2555),
    "preco" decimal(5,2),
    "url_imagem" varchar(2555),
    UNIQUE(titulo)

)`; const LGBT_SCHEMA = `
CREATE TABLE IF NOT EXISTS "Produtos_Lgbt"(
    "id" INTEGER PRIMARY KEY AUTOINCREMENT, 
    "titulo" varchar(255) NOT NULL,
    "descricao" varchar(2555),
    "preco" decimal(5,2),
    "url_imagem" varchar(2555),
    UNIQUE(titulo)

)`;

const COMPRAS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "ListaDeCompras"(
    "id" INTEGER PRIMARY KEY AUTOINCREMENT, 
    "usuario" varchar(255), 
    "lista_de_produtos" VARCHAR(2555)
    
)`;

function criaTabelaDeUsuarios() {
    bd.run(USUARIOS_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de Usuarios");
    });
}
function criaTabelasDeProdutos() {
    bd.run(FEMININOS_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de Produtos", error);
    });
    bd.run(MASCULINOS_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de Produtos", error);
    });
    bd.run(LGBT_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de Produtos", error);
    });
}
function criaTabelaDelistaDeCompras() {
    bd.run(COMPRAS_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de Lista de Compras");
    });
}
function populaTabelaDeUsuarios() {
    bd.run(`
    INSERT OR IGNORE INTO Usuarios(nome, apelido, email, senha)
    VALUES("Luciano Mendes", "Luth", "luth@teste.com", "123456789")
    `)
}
function populaTabelasDeProdutos() {
    bd.run(`
    INSERT or IGNORE INTO Produtos_Femininos(titulo, descricao, preco, url_imagem)
    VALUES("Chapéu", "Chapéu femimino com aba ondulado e detalhe de corrente", 70.00, "https://cdn.pixabay.com/photo/2017/05/13/12/40/fashion-2309519_960_720.jpg" )`, (error) => {
        if (error) console.log("Erro ao criar tabela de Produtos_F", error.message);
    });

    bd.run(`
    INSERT or IGNORE INTO Produtos_Masculinos(titulo, descricao, preco, url_imagem)
    VALUES("Tênis", "Tênis Azul com listras brancas", 100.00, "https://cdn.pixabay.com/photo/2019/05/10/21/19/partnerlook-4194531_960_720.jpg" )`, (error) => {
        if (error) console.log("Erro ao criar tabela de Produtos_M", error.message);
    });

    bd.run(`
    INSERT or IGNORE INTO Produtos_Lgbt(titulo, descricao, preco, url_imagem)
    VALUES("Guarda-Chuva", "Guarda-Chuva Arco-Íris Lgbt", 150.00, "https://cdn.pixabay.com/photo/2020/07/08/20/43/rainbow-5385163_960_720.jpg" )`, (error) => {
        if (error) console.log("Erro ao criar tabela de Produtos_L", error.message);
    })
}
bd.serialize(() => {

    criaTabelaDeUsuarios();
    criaTabelasDeProdutos();
    criaTabelaDelistaDeCompras();
    populaTabelasDeProdutos();
    populaTabelaDeUsuarios();
})
process.on('SIGINT', () =>
    db.close(() => {
        console.log(' BD encerrado!');
        process.exit(0);
    })
);
module.exports = bd;