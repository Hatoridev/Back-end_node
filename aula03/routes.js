// Importa o módulo express para facilitar a criação de rotas.
const express = require('express');
// Cria um roteador para adicionar as rotas.
const router = express.Router();
// Importa o banco de dados.
const db = require('./database');

// Rota principal, que responde com uma mensagem de boas-vindas.
router.get('/', (req, res) => {
    res.send('<h1>Bem-vindo à Aula 03 - Node.js e SQLite</h1>');
});

// Rota para listar todos os usuários no banco de dados.
router.get('/users', (req, res) => {
    db.all("SELECT * FROM users", (err, rows) => {
        if (err) {
            res.status(500).send('Erro ao acessar o banco de dados.');
            return;
        }
        res.send(`<h2>Lista de Usuários:</h2><ul>${rows.map(user => `<li>${user.name} - ${user.email}</li>`).join('')}</ul>`);
    });
});

// Rota para adicionar um usuário ao banco de dados.
router.get('/add-user', (req, res) => {
    const { id, name, email } = req.query;
    if (!id || !name || !email) {
        return res.status(400).send('ID, nome e email são obrigatórios.');
    }
    const stmt = db.prepare("INSERT INTO users VALUES (?, ?, ?)");
    stmt.run(id, name, email);
    stmt.finalize();
    res.send(`<h1>Usuário ${name} adicionado com sucesso!</h1>`);
});

module.exports = router;

