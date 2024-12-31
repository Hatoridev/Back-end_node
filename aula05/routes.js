// Importando o Express
const express = require('express');
const router = express.Router();

// Rota para mostrar dados do banco
router.get('/dados', (req, res) => {
    res.send('Aqui estão os dados'); // A lógica de consulta ao banco está em server.js
});

module.exports = router;

// MySQL: Em MySQL, a consulta poderia ser algo assim:
// router.get('/dados', (req, res) => {
//     connection.query('SELECT * FROM dados', (err, results) => {
//         if (err) {
//             res.status(500).send('Erro ao consultar dados');
//         } else {
//             res.json(results);
//         }
//     });
// });

// MongoDB: Para MongoDB, a consulta poderia ser:
// router.get('/dados', (req, res) => {
//     MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
//         if (err) {
//             res.status(500).send('Erro ao consultar dados');
//         } else {
//             const db = client.db(dbName);
//             db.collection('dados').find({}).toArray((err, docs) => {
//                 if (err) {
//                     res.status(500).send('Erro ao consultar dados');
//                 } else {
//                     res.json(docs);
//                 }
//             });
//         }
//     });
// });

