# Aula 19 - 12 Node-RED - Criando uma API Restful com Node-RED

## Descrição
Nesta aula, vamos aprender como criar uma API Restful simples utilizando o Node-RED. Usaremos o protocolo HTTP para interagir com o banco de dados SQLite e manipular dados via requisições REST.

## Estrutura do Projeto

1. **`index.html`**: Página simples com a lista de tópicos da aula.
2. **`style.css`**: Arquivo CSS para estilizar a página.
3. **`flows.json`**: Arquivo de fluxo do Node-RED para criar a API Restful e fazer interações com o banco de dados SQLite.

## Como Rodar no Termux

1. Instale o Node.js e o Node-RED:
    ```bash
    pkg update
    pkg install nodejs
    npm install -g --unsafe-perm node-red
    ```

2. Instale o SQLite3 no Termux:
    ```bash
    pkg install sqlite
    ```

3. Crie o banco de dados `dados.db`:
    - Use o comando para criar o banco de dados e inserir os dados com o arquivo `database.sql`:
    ```bash
    sqlite3 dados.db < database.sql
    ```

4. Clone o repositório.

5. Navegue até o diretório onde o arquivo `flows.json` está localizado.

6. Inicie o Node-RED:
    ```bash
    node-red
    ```

7. Acesse a interface do Node-RED em `http://localhost:1880`.

8. Importe o fluxo `flows.json` no Node-RED.

9. Abra `index.html` em um navegador e interaja com a página.

---

## Como Funciona o Fluxo

- O **nó HTTP In** escuta uma requisição GET no endpoint `/users`.
- O **nó Function** conecta-se ao banco de dados SQLite, consulta todos os usuários e envia a resposta.
- O **nó HTTP Response** envia a resposta da requisição para o cliente com os dados dos usuários.

