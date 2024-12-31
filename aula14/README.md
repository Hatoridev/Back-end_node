# Aula 14 -07 Node-RED - Enviando Dados, Cookies e HTTP GET

## Descrição
Nesta aula, vamos aprender a enviar dados de um formulário para uma API, trabalhar com cookies no Node-RED, e realizar requisições HTTP GET simples. 

## Estrutura do Projeto

1. **`index.html`**: Página simples contendo o formulário de envio de dados.
2. **`style.css`**: Arquivo CSS que estiliza a página.
3. **`script.js`**: Arquivo JavaScript que lida com a lógica de envio do formulário e resposta da API.
4. **`flows.json`**: Arquivo de fluxo do Node-RED que processa os dados recebidos e retorna uma resposta.

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

6. Importe o fluxo do arquivo `flows.json` e veja o fluxo funcionar.

7. Abra o arquivo `index.html` em seu navegador.

8. Preencha o formulário e envie os dados para testar a comunicação com a API.

## Como Funciona o Fluxo

- O formulário envia os dados para a API usando o método POST.
- O fluxo no Node-RED recebe esses dados e retorna uma mensagem de sucesso.
- A resposta é exibida na página web.

## Melhorias Futuras
- Adicionar validação dos dados no lado do servidor.
- Implementar autenticação e segurança na API.
- Melhorar a interface do usuário para um design mais interativo.

