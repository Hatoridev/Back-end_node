// Importa o módulo 'fs' para ler os arquivos HTML
const fs = require('fs');
const path = require('path');

// Função para lidar com as rotas
module.exports.handleRoutes = (req, res) => {
  // Define o caminho para a pasta de arquivos estáticos
  const basePath = path.join(__dirname, 'public');

  // Tratamento das rotas
  if (req.url === '/' || req.url === '/index.html') {
    fs.readFile(path.join(basePath, 'index.html'), 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end('Erro ao carregar a página.');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else if (req.url === '/sobre') {
    fs.readFile(path.join(basePath, 'sobre.html'), 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end('Erro ao carregar a página.');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else if (req.url === '/contato') {
    fs.readFile(path.join(basePath, 'contato.html'), 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end('Erro ao carregar a página.');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('Página não encontrada');
  }
};

