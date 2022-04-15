# api-de-compras
## api de criação e gerenciamento de usuários, produtos e lista de compras de um app.

## A Api foi feita com JavaScript em node.js + express. 
## AS seguintes dependências foam utilizadas: 

### "dependencies": {
    "bcrypt": "^5.0.1",
    "cors": "^2.8.5",
    "express": "^4.17.3",
    "sqlite3": "^5.0.2"
  }"
  
 ### e as dependências de desenvolvimento:
  "devDependencies": {
    "jest": "^27.5.1",
    "nodemon": "^2.0.15",
    "supertest": "^6.2.2"
  }"

# ROTAS:

## ENTIDADE USUÁRIOS:
| Método | Descrição | Rota|
| ------ | ---- | -------- |
| POST | CADASTRAR USUÁRIOS `/usuario`|
| GET | RETORNAR LISTA DE USUÁRIOS | `/usuarios` |
| POST | AUTENTICAÇÃO DE LOGIN | `/usuario/login` |
| GET | RETORNAR USUÁRIO PELO ID | `/usuarios/:id` |
| PATCH | ATUALIZAR CADASTRO | `/usuario/:email` |
| DELETE | DELETAR USUÁRIO | `/usuario/:email` |
| ------ | --------------- | ---------------- |
 
 ## ENTIDADE PRODUTOS_FEMININOS
| Método | Descrição | Rota|
| ------ | ---- | -------- |
| POST | CADASTRAR Produto `/produto/feminino`|
| GET | RETORNAR LISTA DE PRODUTOS FEMININOS | `/produtos/femininos` |
| GET | RETORNAR PRODUTO PELO ID | `/produto/feminino/:id` |
| PATCH | ATUALIZAR CADASTRO | `/produto/feminino/:id` |
| DELETE | DELETAR USUÁRIO | `/produto/feminino/:id` |
| ------ | --------------- | ---------------- |

 ## ENTIDADE PRODUTOS_MASCULINOS
| Método | Descrição | Rota|
| ------ | ---- | -------- |
| POST | CADASTRAR Produto `/produto/masculino`|
| GET | RETORNAR LISTA DE PRODUTOS MASCULINOS | `/produtos/masculinos` |
| GET | RETORNAR PRODUTO PELO ID | `/produto/masculino/:id` |
| PATCH | ATUALIZAR CADASTRO | `/produto/masculino/:id` |
| DELETE | DELETAR USUÁRIO | `/produto/masculino/:id` |
| ------ | --------------- | ---------------- |
 
 ## ENTIDADE PRODUTOS_LGBT
| Método | Descrição | Rota|
| ------ | ---- | -------- |
| POST | CADASTRAR Produto `/produto/lgbt`|
| GET | RETORNAR LISTA DE PRODUTOS LGBT | `/produtos/lgbt` |
| GET | RETORNAR PRODUTO PELO ID | `/produto/lgbt/:id` |
| PATCH | ATUALIZAR CADASTRO | `/produto/lgbt/:id` |
| DELETE | DELETAR USUÁRIO | `/produto/lgbt/:id` |
| ------ | --------------- | ---------------- |
 ## UM LOGIN JÁ CADASTRADO PARA TESTAR:
 ```{
      "email": "keener@io.com",
      "senha": "Reccahj@"
     }```
