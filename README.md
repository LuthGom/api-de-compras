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
 ### POST - CADASTRAR USUÁRIOS ("/usuario")
 ### GET - RETORNAR LISTA DE USUÁRIOS ("/usuarios")
 ### POST - AUTENTICAÇÃO DE LOGIN ("/usuario/login")
 ### GET - RETORNAR USUÁRIO PELO ID ("usuario/:id")
 ### PATCH - ATUALIZAR CADASTRO ("usuario/:email")
 ### DELETE - DELETAR CADASTRO ("usuario/:email")
 
 ## ENTIDADE PRODUTOS
 ### POST - CADASTRAR PRODUTOS ("/produto")
 ### GET - RETORNAR LISTA DE PRODUTOS ("/produtos")
 ### GET - RETORNAR PRUDUTOS PELO ID ("produto/:id")
 ### PATCH - ATUALIZAR PRODUTO ("produto/:id")
 ### DELETE - DELETAR PRODUTO ("produto/:id")

## ENTIDADE COMPRAS
### POST - CADASTRAR LISTA DE COMPRAS ("/compra")
 ### GET - RETORNAR LISTA DE COMPRAS ("/produtos")
 ### GET - RETORNAR COMPRAS PELO ID ("produto/:id")
 
 ## UM LOGIN JÁ CADASTRADO PARA TESTAR:
 ```{
      "email": "keener@io.com",
      "senha": "Reccahj@"
     }```
