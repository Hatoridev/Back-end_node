# Aula 05 - Banco de Dados com SQLite, MongoDB e Métodos de Consulta

## Descrição

Nesta aula, vamos continuar o trabalho com o banco de dados SQLite e introduzir o uso de **MongoDB** para manipulação de dados. Vamos explorar os métodos de consulta, como `find`, `findOne`, `insert`, `delete`, e `update`, além de como usar **SQLite** e **MongoDB** para consultar e modificar dados em nossos bancos.

---

## Estrutura do Projeto

1. **`server.js`**: Arquivo principal que configura o servidor, carrega as rotas e lida com as interações com o banco de dados.
2. **`routes.js`**: Arquivo responsável por definir as rotas do servidor, incluindo a manipulação de dados no banco.
3. **`database.js`**: Arquivo que configura as conexões com o banco de dados **SQLite** e **MongoDB**.
4. **`index.html`**: Página HTML que exibe os dados do banco e permite a inserção e exclusão de registros.
5. **`style.css`**: Arquivo CSS para a interface do usuário, deixando a página visualmente agradável.

---

## Como Rodar no Termux

1. **Clone o repositório**:

   Clone o repositório no seu diretório de trabalho:
   ```bash
   git clone https://github.com/SeuUsuario/SeuRepositorio.git
   cd SeuRepositorio/aula05
   ```

2. **Instale o Node.js e as dependências**:

   Se você ainda não tiver o **Node.js** instalado no Termux, instale-o com o comando:
   ```bash
   pkg install nodejs
   ```

   Em seguida, instale as dependências necessárias:
   ```bash
   npm install express sqlite3 mongodb
   ```

3. **Crie o banco de dados SQLite**:

   O banco de dados **SQLite** será criado automaticamente ao rodar o servidor pela primeira vez. No entanto, caso precise criar manualmente o banco de dados, execute:
   ```bash
   node database.js
   ```

4. **Rodando o servidor**:

   Com as dependências instaladas e o banco de dados configurado, inicie o servidor:
   ```bash
   node server.js
   ```

5. **Acesse a aplicação**:

   Abra um navegador e acesse a URL:
   
   [http://localhost:3000](http://localhost:3000)
   

   Você verá uma interface simples onde pode inserir dados no banco e realizar operações como `find`, `insert`, `delete` e `update`.
