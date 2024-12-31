# Aula 16 -09 Node-RED - Consumindo APIs Externas

## Descrição
Nesta aula, vamos aprender como consumir APIs externas no Node-RED. Criamos um fluxo que faz uma requisição a uma API pública (JSONPlaceholder) para obter informações sobre usuários e exibir esses dados em nossa interface web.

## Estrutura do Projeto
1. **`index.html`**: Arquivo HTML com um botão para carregar dados da API externa.
2. **`style.css`**: Arquivo CSS para estilizar a página.
3. **`script.js`**: Arquivo JavaScript para fazer a requisição à API e exibir os dados.
4. **`flows.json`**: Arquivo de fluxo do Node-RED para consumir a API externa e processar os dados.

## Como Rodar no Termux

1. Instale o Node.js e o Node-RED:

    ```bash
    pkg update
    pkg install nodejs
    npm install -g --unsafe-perm node-red
    ```

2. Clone o repositório.

3. Navegue até o diretório onde o arquivo `flows.json` está localizado.

4. Inicie o Node-RED:

    ```bash
    node-red
    ```

5. Acesse a interface do Node-RED em `http://localhost:1880`.

6. Importe o fluxo `flows.json` no Node-RED.

7. Abra `index.html` em um navegador e interaja com a página.

## Como Funciona

- O fluxo no Node-RED faz uma requisição para a API externa (JSONPlaceholder).
- A resposta da API é processada e os dados são formatados.
- Os dados são retornados ao usuário que solicitou a requisição via um endpoint HTTP.

## Melhorias Futuras
- Integração com outras APIs externas.
- Melhoria na interface do usuário.
- Adição de mais nós para realizar ações dinâmicas baseadas nas respostas da API.

