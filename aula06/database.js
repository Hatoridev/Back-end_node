// Importando o SQLite3
const sqlite3 = require('sqlite3').verbose();

// Criando a conexão com o banco de dados SQLite
const db = new sqlite3.Database('./banco.db', (err) => {
  if (err) {
    console.error("Erro ao conectar com o banco de dados: ", err.message);
  } else {
    console.log("Conectado ao banco de dados SQLite.");
  }
});

// Criando as tabelas no banco de dados
db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY, nome TEXT, email TEXT)");
  db.run("CREATE TABLE IF NOT EXISTS enderecos (id INTEGER PRIMARY KEY, usuario_id INTEGER, rua TEXT)");
});

module.exports = db;

/*
    - Como seria com MySQL:
    - Para MySQL, usaríamos o pacote `mysql2` ou `mysql` para gerenciar a conexão. Exemplo:
    
    const mysql = require('mysql2');
    
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'meubanco'
    });

    connection.connect((err) => {
      if (err) {
        console.error('Erro ao conectar ao MySQL: ', err.message);
      } else {
        console.log('Conectado ao MySQL');
      }
    });

    - A consulta SQL para listar usuários seria a mesma, apenas usando `connection.query()` para executar as consultas:
    
    connection.query('SELECT * FROM usuarios LIMIT ?', [limit], (err, results) => {
      if (err) {
        console.error(err.message);
      }
      res.json(results);
    });
    
    - Como seria com MongoDB:
    - No caso do MongoDB, faríamos uma conexão com o banco usando o `mongoose`, e as consultas seriam feitas utilizando o ORM do MongoDB.
    
    const mongoose = require('mongoose');
    
    mongoose.connect('mongodb://localhost:27017/meubanco', { useNewUrlParser: true, useUnifiedTopology: true });
    
    mongoose.connection.on('open', () => {
      console.log('Conectado ao MongoDB');
    });
    
    - Para a consulta de usuários, o código ficaria assim:
    
    const Usuario = mongoose.model('Usuario', new mongoose.Schema({ nome: String, email: String }));
    
    Usuario.find().limit(limit).exec((err, usuarios) => {
      if (err) {
        console.error(err);
      }
      res.json(usuarios);
    });
*/

