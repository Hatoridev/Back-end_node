// Importa o módulo express, para criar o servidor web.
const express = require('express');
// Cria uma instância do servidor express.
const app = express();
// Importa o arquivo de rotas.
const routes = require('./routes');
// Configura o servidor para usar as rotas.
app.use(routes);

// Define a porta do servidor.
const PORT = 3000;

// Inicia o servidor e começa a escutar na porta definida.
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

