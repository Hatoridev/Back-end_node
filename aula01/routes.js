// Importa o módulo `fs` para trabalhar com arquivos
const fs = require('fs');
const path = require('path');

// Define o manipulador de rotas
const handleRoutes = (req, res) => {
    // Define o caminho para os arquivos HTML
    const filePath = path.join(__dirname, 'index.html');

    // Define os cabeçalhos para HTML
    const sendResponse = (content) => {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(content);
    };

    // Verifica a URL requisitada
    if (req.url === '/') {
        // Lê o conteúdo do arquivo `index.html`
        fs.readFile(filePath, 'utf8', (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end('Erro ao carregar o arquivo.');
            } else {
                sendResponse(content);
            }
        });
    } else if (req.url === '/sobre') {
        // Retorna o conteúdo da seção "Sobre"
        sendResponse(`
            <h2>Sobre</h2>
            <p>Esta é a seção Sobre do site.</p>
            <a href="/">Voltar à Página Inicial</a>
        `);
    } else if (req.url === '/contato') {
        // Retorna o conteúdo da seção "Contato"
        sendResponse(`
            <h2>Contato</h2>
            <p>Entre em contato pelo e-mail: exemplo@dominio.com</p>
            <a href="/">Voltar à Página Inicial</a>
        `);
    } else {
        // Retorna uma mensagem de erro para rotas não encontradas
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Página não encontrada.');
    }
};

// Exporta o módulo de rotas
module.exports = handleRoutes;

