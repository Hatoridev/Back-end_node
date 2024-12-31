const express = require('express');
const router = express.Router(); // Cria um roteador de requisições

// Rota de exemplo para retornar todos os usuários
router.get('/usuarios', (req, res) => {
    // Aqui você faria a consulta ao banco SQLite
    // Exemplo para SQLite:
    db.all('SELECT * FROM usuarios', (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        }
        res.json({
            message: 'Listagem de usuários',
            data: rows
        });
    });

    /* Exemplo para MySQL
    const mysql = require('mysql2');
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'meubanco'
    });

    connection.query('SELECT * FROM usuarios', function(err, results, fields) {
        if (err) {
            res.status(500).json({ error: err.message });
        }
        res.json({
            message: 'Listagem de usuários',
            data: results
        });
    });
    */

    /* Exemplo para MongoDB
    const mongoose = require('mongoose');
    const Usuario = mongoose.model('Usuario', new mongoose.Schema({
        nome: String,
        email: String
    }));

    Usuario.find({}, (err, usuarios) => {
        if (err) {
            res.status(500).json({ error: err.message });
        }
        res.json({
            message: 'Listagem de usuários',
            data: usuarios
        });
    });
    */
});

// Rota de exemplo para atualizar um usuário
router.put('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const { nome, email } = req.body;

    // Atualizando o usuário no SQLite
    db.run('UPDATE usuarios SET nome = ?, email = ? WHERE id = ?', [nome, email, id], function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
        }
        res.json({
            message: 'Usuário atualizado',
            data: { id, nome, email }
        });
    });

    /* Exemplo para MySQL
    connection.query('UPDATE usuarios SET nome = ?, email = ? WHERE id = ?', [nome, email, id], (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        }
        res.json({
            message: 'Usuário atualizado',
            data: { id, nome, email }
        });
    });
    */

    /* Exemplo para MongoDB
    Usuario.findByIdAndUpdate(id, { nome, email }, { new: true }, (err, usuario) => {
        if (err) {
            res.status(500).json({ error: err.message });
        }
        res.json({
            message: 'Usuário atualizado',
            data: usuario
        });
    });
    */
});

module.exports = router;

