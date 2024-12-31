# Aula 18 -11 Node-RED- Interagindo com Banco de Dados SQLite no Node-RED

## Descrição
Nesta aula, vamos aprender a interagir com um banco de dados SQLite no Node-RED. Vamos conectar o Node-RED a um banco de dados SQLite, realizar consultas e exibir os resultados na interface do Node-RED.

## Estrutura do Projeto

1. **`index.html`**: Página simples com a lista de tópicos da aula.
2. **`style.css`**: Arquivo CSS para estilizar a página.
3. **`flows.json`**: Arquivo de fluxo do Node-RED para conectar ao banco de dados SQLite e consultar os dados.

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

- O **nó Inject** inicia o processo de consulta.
- O **nó Function** se conecta ao banco de dados SQLite, realiza uma consulta e envia os dados de volta.
- O **nó Debug** exibe os resultados da consulta no painel de debug do Node-RED.

