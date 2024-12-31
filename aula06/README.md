# Aula 06 - Atualizando Registros, Limitação de Resultados e JOIN com SQLite

## Descrição
Nesta aula, vamos aprender como atualizar registros no banco de dados, limitar o número de resultados retornados e realizar junções entre tabelas no banco de dados SQLite. Além disso, vamos comentar como seria a implementação dessas funcionalidades utilizando MySQL e MongoDB.

## Estrutura do Projeto
1. **`server.js`**: Arquivo principal que configura o servidor e carrega as rotas.
2. **`routes.js`**: Arquivo responsável por definir as rotas do servidor, incluindo a listagem de usuários, atualização e JOIN.
3. **`database.js`**: Arquivo que configura o banco de dados SQLite e suas interações.
4. **`index.html`**: Página HTML que exibe os dados dos usuários.
5. **`style.css`**: Estilo para a interface do usuário.

## Como Rodar no Termux
1. Clone o repositório.
2. Instale o Node.js e as dependências:
   ```bash
   pkg install nodejs
   npm install express sqlite3
   ```
3. Crie o banco de dados SQLite e as tabelas necessárias:
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
- **MySQL**: Comentários foram adicionados no código, explicando como seria a implementação utilizando o MySQL. Seria necessário usar o pacote `mysql2` para conectar-se ao banco de dados, realizar consultas e atualizar registros.
  
- **MongoDB**: Também incluímos comentários explicando como seria a implementação com MongoDB, utilizando o pacote `mongoose` para conectar-se ao banco e manipular os dados.

```
