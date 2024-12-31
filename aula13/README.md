# Aula 13 -06 Node-RED- Cabeçalhos da API e Manipulação de Arquivos

## Descrição
Na Aula 06, vamos aprender sobre como configurar os cabeçalhos da API, enviar e receber dados em formato JSON e trabalhar com o upload de arquivos. Através do Node-RED, vamos aprender a manipular essas funcionalidades para criar uma API mais robusta.

## Estrutura do Projeto

1. **`flows.json`**: Arquivo com o fluxo do Node-RED que configura a API e manipula cabeçalhos e arquivos.
2. **`index.html`**: Página HTML explicativa sobre a aula e como a API funciona.
3. **`style.css`**: Arquivo de estilo para a página HTML.

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

5. Acesse o Node-RED no seu navegador: [http://localhost:1880](http://localhost:1880)

6. Importe o fluxo do arquivo `flows.json` para o Node-RED.

7. Acesse a API criada em: [http://localhost:1880/api/upload](http://localhost:1880/api/upload)

## Como Funciona o Fluxo

- O nó **HTTP In** define uma rota de API onde podemos enviar dados JSON ou arquivos para o servidor.
- O nó **Function** manipula as requisições e configura a resposta, incluindo a configuração dos cabeçalhos da API.
- O nó **HTTP Response** retorna a resposta da API, incluindo os cabeçalhos necessários e, se houver, os arquivos enviados.
- A API pode receber e enviar arquivos, além de manipular dados JSON enviados nas requisições.

## Melhorias Futuras

- Adicionar autenticação para as APIs.
- Implementar validação para arquivos recebidos.
- Integrar com bancos de dados para armazenar informações.

