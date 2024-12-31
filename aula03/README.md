# Aula 03 - Node.js e SQLite

## Descrição
Nesta aula, vamos aprender como criar um servidor simples utilizando Node.js com o Express e integrar um banco de dados SQLite. Iremos também explorar como fazer rotas dinâmicas para listar e adicionar usuários.

### O que será abordado:

1. **Servidor Express com Node.js**
   - Como configurar um servidor básico utilizando o Express.js.
   - Como criar rotas para responder a requisições HTTP.

2. **Banco de Dados SQLite**
   - Como utilizar SQLite para armazenar dados em memória.
   - Como interagir com o banco de dados através de consultas e inserções.

3. **Rotas para Interagir com o Banco de Dados**
   - Como criar rotas para listar os usuários e adicionar novos usuários ao banco de dados.

---

## Estrutura do Projeto

- **`server.js`**: Arquivo principal que configura o servidor e carrega as rotas.
- **`routes.js`**: Arquivo responsável por definir as rotas do servidor.
- **`database.js`**: Arquivo que configura o banco de dados SQLite e suas interações.
- **`index.html`**: Página HTML simples para visualizar as rotas e interagir com o servidor.
- **`style.css`**: Estilo básico para deixar a interface mais bonita.

---

## Como Rodar no Termux

1. Clone o repositório.
2. Instale as dependências com o seguinte comando:
   ```bash
   npm install express sqlite3
   ```
3. Execute o servidor com:
   ```bash
   node server.js
   ```
4. Acesse a aplicação no seu navegador:
   - Acesse [http://localhost:3000](http://localhost:3000) para visualizar a página inicial.
   - Use os links para ver os usuários ou adicionar novos.

---

## Melhorias Futuras
- Implementação de autenticação e controle de usuários.
- Melhorias na interface do usuário.
- Persistência de dados em disco ao invés de apenas na memória.
