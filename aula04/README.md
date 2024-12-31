# Aula 04 - Node.js, SQLite e Upload de Arquivos

## Descrição
Nesta aula, vamos continuar o trabalho com o banco de dados SQLite, integrando a manipulação de arquivos no Node.js. Vamos implementar um upload de arquivos com o módulo `formidable` e também continuar utilizando o banco de dados SQLite para armazenar e listar usuários.

---

## Estrutura do Projeto

1. **`server.js`**: Arquivo principal que configura o servidor e carrega as rotas.
2. **`routes.js`**: Arquivo responsável por definir as rotas do servidor, incluindo upload de arquivos.
3. **`database.js`**: Arquivo que configura o banco de dados SQLite e suas interações.
4. **`index.html`**: Página HTML que exibe os dados e permite o upload de arquivos.
5. **`style.css`**: Estilo para a interface do usuário.

---

## Como Rodar no Termux

1. Clone o repositório.
2. Instale o Node.js e as dependências:
   ```bash
   pkg install nodejs
   npm install express sqlite3 formidable
   ```
3. Crie o diretório `uploads` para armazenar os arquivos enviados:
   ```bash
   mkdir uploads
   ```
4. Execute o servidor com:
   ```bash
   node server.js
   ```
5. Acesse a aplicação no seu navegador:
   - Acesse [http://localhost:3000](http://localhost:3000) para visualizar a página inicial.
   - Use o formulário para enviar arquivos e visualizar a lista de usuários cadastrados.

---

## Melhorias Futuras
- Implementação de autenticação e controle de usuários.
- Melhorias na interface do usuário.
- Persistência de dados em disco ao invés de apenas na memória.
