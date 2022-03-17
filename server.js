const app = require('./src/app')
const port = process.env.PORT || 3000;

const server  = app.listen(port, () => {console.log(`Servidor local rodando na porta ${port}`);})