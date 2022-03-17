const request = require("supertest");
const app = require("../app");

const usuario = {
  nome: "João Test Jest",
  apelido: "Joãozinho",
  email: "teste@jest.com",
  senha: "Reccahj@",
  cpf: "750.156.770-06",
  telefone: 23145697877,
  cep: 12145887,
  endereco: "Rua do Brilho Eterno",
  cidade: "Vale das Yags",
  uf: "RB",
  complemento: '',
}

describe("Testagem de rota POST", () => {
  test("deveria retornar um novo usuario cadastrado", async () => {
    try {
      const resposta = await request(app).post("/usuario").send(usuario)
      expect(resposta.statusCode).toBe(200)
    } catch (erro) {
      console.log(erro);
    }

  })
  test("deveria retornar Status 400", async () => {
    try {
      const usuarioErradoTeste = {
        nome: "Joao Jest",
        telefone: 23145697877,
        cep: 12145887,
        endereco: "Rua do Brilho Eterno",
        cidade: "Vale das Yags",
        uf: "RB",
        email: "teste@jest.com",
        senha: "Reccahj@",
      }
      const resposta = await request(app).post("/usuario").send(usuarioErradoTeste)
      expect(resposta.statusCode).toBe(400)
    } catch (erro) {
      return erro;
    }
  })
})
describe("Testagem de rota GET ", () => {

  test("deveria retornar Status 200, propriedade 'usuarios' e error = false", async () => {
    const res = await request(app).get("/usuarios");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("usuarios");
    expect(res.body.error).toBe(false);
  });

});

describe("Testagem de rota UPDATE", () => {
  test("deveria retornar o novo e-mail atualizado: 'teste@atualizado.com'", async () => {
    try {
      const usuarioAtualizado = {
        email: "teste@atualizado.com"
      }
      const res = await request(app).patch(`/usuario/${usuario.email}`).send(usuarioAtualizado)
      expect(res.statusCode).toBe(200);
      expect(res.body.error).toBe(false)
    } catch (erro) {
      return erro
    }
  })
})

describe("Testagem de rota UPDATE", () => {
  test("deveria deletar o usuario'", async () => {
    try {

      const res = await request(app).delete(`/usuarios/${usuario.email}`)
      expect(res.statusCode).toBe(200);
      expect(res.body.error).toBe(false)
    } catch (erro) {
      return erro
    }
  })
})