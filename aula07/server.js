const express = require('express'); // Importa o Express para criar o servidor
const app = express();
const routes = require('./routes'); // Importa as rotas definidas em routes.js

app.use(express.json()); // Middleware para tratar requisições JSON
app.use(express.urlencoded({ extended: true })); // Middleware para tratar dados de formulários
app.use(routes); // Usa as rotas definidas

const port = 3000; // Porta onde o servidor vai rodar
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

