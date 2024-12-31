# Aula 15 -08 Node-RED - Trabalhando com Arquivos JSON

## Descrição
Nesta aula, vamos aprender como salvar e carregar dados de um arquivo JSON em Node-RED. Usaremos a API para armazenar dados enviados através de um formulário e, em seguida, ler esses dados de volta para exibição na interface.

## Estrutura do Projeto

1. **`index.html`**: Página simples com formulário para salvar dados e botão para carregar dados.
2. **`style.css`**: Arquivo CSS para estilizar a página.
3. **`script.js`**: Arquivo JavaScript que manipula a lógica de enviar e carregar dados.
4. **`flows.json`**: Arquivo de fluxo do Node-RED para salvar e carregar dados de um arquivo JSON.

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

