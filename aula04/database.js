const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:'); // Usando banco de dados em memória

// Criar tabela de usuários
db.serialize(() => {
    db.run("CREATE TABLE usuarios (nome TEXT, email TEXT)");

    // Inserir alguns dados iniciais
    const stmt = db.prepare("INSERT INTO usuarios VALUES (?, ?)");
    stmt.run("João", "joao@example.com");
    stmt.run("Maria", "maria@example.com");
    stmt.finalize();
});

// Função para buscar todos os usuários
function getUsuarios(callback) {
    db.all("SELECT * FROM usuarios", (err, rows) => {
        if (err) {
            console.error(err.message);
            return;
        }
        callback(rows);
    });
}

module.exports = { getUsuarios };

