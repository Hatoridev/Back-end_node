// Importando o módulo SQLite
const sqlite3 = require('sqlite3').verbose();

// Conectando ao banco de dados SQLite
const db = new sqlite3.Database('./meubanco.db', (err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.message);
    } else {
        console.log('Conexão com o banco de dados SQLite estabelecida.');
    }
});

// Função para consultar dados do banco (SQLite)
const consultarDados = () => {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM dados', (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
};

module.exports = { consultarDados };

// MySQL: Conexão com MySQL usando o módulo `mysql2`:
// const mysql = require('mysql2');
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'meubanco'
// });
// const consultarDadosMySQL = () => {
//     return new Promise((resolve, reject) => {
//         connection.query('SELECT * FROM dados', (err, results) => {
//             if (err) reject(err);
//             else resolve(results);
//         });
//     });
// };

// MongoDB: Conexão com MongoDB usando o módulo `mongodb`:
// const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb://localhost:27017';
// const dbName = 'meubanco';
// const consultarDadosMongoDB = () => {
//     return new Promise((resolve, reject) => {
//         MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
//             if (err) reject(err);
//             const db = client.db(dbName);
//             db.collection('dados').find({}).toArray((err, docs) => {
//                 if (err) reject(err);
//                 else resolve(docs);
//             });
//         });
//     });
// };

