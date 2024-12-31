# Aula 10 -03 Node-RED - Manipulando Mensagens de Payload e Topic no Node-RED

## Descrição
Na Aula 03, vamos aprender a manipular as mensagens de **payload** e **topic**, além de explorar os nós **switch**, **change** e **template** para controlar o fluxo de dados. Com isso, vamos aprender a usar condicionalismos e manipular as mensagens de forma mais avançada.

## Estrutura do Projeto

1. **`flows.json`**: Arquivo de fluxo do Node-RED, onde configuramos os nós e definimos o fluxo de dados.
2. **`index.html`**: Página simples que descreve os conceitos abordados na aula.
3. **`style.css`**: Arquivo de estilos para a página HTML.

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

## Como Funciona o Fluxo

- O nó **Inject** envia uma mensagem com o texto "Mensagem Inicial".
- O nó **Function** manipula essa mensagem, adicionando o texto " - Fluxo Processado".
- O nó **Debug** exibe o resultado no painel de debug.

## Melhorias Futuras
- Aprender a manipular variáveis de contexto e como elas afetam o fluxo de dados.
- Explorar nós mais avançados como **MySQL**, **API** e **MQTT** para aumentar a complexidade do fluxo.
