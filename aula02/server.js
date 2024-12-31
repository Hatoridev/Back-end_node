// Importando o módulo do Express
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// Definindo a porta em que o servidor vai rodar
const port = 3000;

// Servindo arquivos estáticos (CSS)
app.use(express.static('public'));

// Rota para a página inicial
app.get('/', (req, res) => {
  fs.readFile(path.join(__dirname, 'index.html'), 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send('Erro ao carregar a página inicial');
    } else {
      res.send(data);
    }
  });
});

// Rota para a página "Sobre"
app.get('/sobre', (req, res) => {
  fs.readFile(path.join(__dirname, 'sobre.html'), 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send('Erro ao carregar a página sobre');
    } else {
      res.send(data);
    }
  });
});

// Rota para a página "Contato"
app.get('/contato', (req, res) => {
  fs.readFile(path.join(__dirname, 'contato.html'), 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send('Erro ao carregar a página de contato');
    } else {
      res.send(data);
    }
  });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

