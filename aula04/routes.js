const express = require('express');
const router = express.Router();
const formidable = require('formidable');
const path = require('path');
const fs = require('fs');
const database = require('./database');

// Rota para renderizar a página inicial
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota para exibir todos os usuários
router.get('/usuarios', (req, res) => {
    database.getUsuarios((usuarios) => {
        res.json(usuarios);
    });
});

// Rota para upload de arquivos
router.post('/upload', (req, res) => {
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
        if (err) {
            res.status(500).send('Erro no upload');
            return;
        }
        // Salvar o arquivo no diretório 'uploads'
        const oldPath = files.arquivo[0].path;
        const newPath = path.join(__dirname, 'uploads', files.arquivo[0].name);
        fs.rename(oldPath, newPath, (err) => {
            if (err) {
                res.status(500).send('Erro ao mover o arquivo');
                return;
            }
            res.send('Arquivo enviado com sucesso!');
        });
    });
});

module.exports = router;

