// Importa o módulo HTTP para criar o servidor
const http = require('http');

// Importa o módulo para rotas
const handleRoutes = require('./routes');

// Cria o servidor e define as rotas
const server = http.createServer((req, res) => {
    handleRoutes(req, res);
});

// Define a porta do servidor
const PORT = 3000;

// Inicia o servidor
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

