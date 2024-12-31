// Importando o banco de dados e outras dependências
const express = require('express');
const router = express.Router();
const db = require('./database');

// Rota para listar registros com limitação de resultados
router.get('/usuarios', (req, res) => {
  const limit = 10; // Limitar a quantidade de resultados
  db.all('SELECT * FROM usuarios LIMIT ?', [limit], (err, rows) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send("Erro ao consultar usuários.");
    }
    res.json(rows);
  });
});

// Rota para atualizar um usuário
router.put('/usuarios/:id', (req, res) => {
  const { id } = req.params;
  const { nome, email } = req.body;
  db.run('UPDATE usuarios SET nome = ?, email = ? WHERE id = ?', [nome, email, id], function(err) {
    if (err) {
      console.error(err.message);
      return res.status(500).send("Erro ao atualizar usuário.");
    }
    res.send(`Usuário com ID ${id} atualizado com sucesso.`);
  });
});

// Rota para realizar um JOIN entre duas tabelas
router.get('/usuarios-com-endereco', (req, res) => {
  db.all('SELECT usuarios.nome, usuarios.email, enderecos.rua FROM usuarios JOIN enderecos ON usuarios.id = enderecos.usuario_id', (err, rows) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send("Erro ao realizar consulta.");
    }
    res.json(rows);
  });
});

module.exports = router;

