// Importando os pacotes necessários
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');

// Usando body-parser para ler dados do formulário
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configurando as rotas
app.use('/', routes);

// Iniciando o servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

