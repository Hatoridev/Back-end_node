# Aula 07 - Atualizando Registros e Exibindo Lista de Usuários com SQLite

## Descrição
Nesta aula, vamos aprender como atualizar registros no banco de dados SQLite e exibir uma lista de usuários na interface do usuário. A funcionalidade de atualização e exibição de registros é feita utilizando rotas em Express. Vamos também comentar como seria a implementação utilizando MySQL e MongoDB.

## Estrutura do Projeto
1. **`server.js`**: Arquivo principal que configura o servidor e carrega as rotas.
2. **`routes.js`**: Arquivo responsável por definir as rotas do servidor, incluindo listagem e atualização de usuários.
3. **`database.js`**: Arquivo que configura o banco de dados SQLite e suas interações.
4. **`index.html`**: Página HTML que exibe a lista de usuários.
5. **`style.css`**: Estilo para a interface do usuário.
6. **`script.js`**: Arquivo JavaScript que faz uma requisição para a rota `/usuarios` e exibe a lista de usuários na página.

## Como Rodar no Termux
1. Clone o repositório.
2. Instale o Node.js e as dependências:
   ```bash
   pkg install nodejs
   npm install express sqlite3
   ```
3. Crie o banco de dados SQLite e a tabela de usuários:
   ```bash
   mkdir banco
   ```
4. Execute o servidor com:
   ```bash
   node server.js
   ```
5. Acesse a aplicação no seu navegador:
   - Acesse [http://localhost:3000](http://localhost:3000) para visualizar a página inicial.

## Melhorias Futuras
- Implementação de autenticação e controle de usuários.
- Melhorias na interface do usuário.
- Persistência de dados em disco ao invés de apenas na memória.

## Comentários sobre MySQL e MongoDB
- **MySQL**: Para o MySQL, seria necessário usar o pacote `mysql2` para conectar-se ao banco de dados e executar consultas como `SELECT` para listagem e `UPDATE` para atualização de dados.

- **MongoDB**: No caso do MongoDB, seria utilizado o pacote `mongoose` para realizar consultas, atualizações e listar documentos.
