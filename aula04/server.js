const express = require('express');
const formidable = require('formidable'); // Para lidar com uploads de arquivos
const path = require('path');
const app = express();
const port = 3000;
const routes = require('./routes');

// Configurações do servidor
app.use(express.static(path.join(__dirname, 'public'))); // Serve arquivos estáticos
app.set('view engine', 'ejs');

// Rotas
app.use('/', routes);

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

