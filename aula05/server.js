// Importando as dependências
const express = require('express'); // Usando Express para o servidor
const app = express();
const port = 3000;
const db = require('./database'); // Importando o arquivo de banco de dados

// Usando middleware para servir arquivos estáticos (CSS, imagens, etc.)
app.use(express.static('public'));

// Definindo uma rota simples
app.get('/', (req, res) => {
    res.send('Olá, mundo!'); // Resposta simples para a rota raiz
});

// Rota para manipulação de dados do banco (SQLite, MySQL ou MongoDB)
app.get('/dados', (req, res) => {
    // Vamos mostrar os dados do banco de dados
    db.consultarDados()
        .then(dados => {
            res.json(dados); // Retorna os dados no formato JSON
        })
        .catch(err => {
            res.status(500).send('Erro ao consultar dados');
        });
});

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

// MySQL: A consulta no MySQL seria feita com o módulo `mysql2`:
// const mysql = require('mysql2');
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'meubanco'
// });
// connection.query('SELECT * FROM tabela', (err, results) => {
//     if (err) throw err;
//     res.json(results);
// });

// MongoDB: No MongoDB, a consulta seria feita utilizando o `mongodb` e o método `find`:
// const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb://localhost:27017';
// const dbName = 'meubanco';
// MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
//     const db = client.db(dbName);
//     db.collection('tabela').find({}).toArray((err, docs) => {
//         res.json(docs);
//     });
// });

