const { Router } = require("express");
const usuariosControllers = require("../usuarios/controller/usuarios");
const router = Router();

module.exports = (app) => {
    app.use(
        router
            .post('/usuario', usuariosControllers.cadastrarUsuario)
            .post('/usuario/login', usuariosControllers.login)
            .get('/usuarios', usuariosControllers.listarTodosOsUsuarios)
            .get('/usuarios/:id', usuariosControllers.listarUsuarioPorId)
            .patch('/usuario/:email', usuariosControllers.atualizarUsuario)
            .delete('/usuario/:email', usuariosControllers.deletarUsuario)
    )
}

