# Aula 11 - 04 Node- RED- Funções e Condicionais no Node-RED

## Descrição
Na Aula 04, vamos aprender como manipular mensagens no Node-RED usando o nó **Function** e como realizar filtragens condicionais com o nó **Switch**. Vamos modificar mensagens com o nó **Function** e usar o nó **Switch** para decidir como o fluxo deve continuar com base no conteúdo da mensagem.

## Estrutura do Projeto

1. **`flows.json`**: Arquivo com o fluxo do Node-RED configurado com os nós **Inject**, **Function**, **Switch**, e **Debug**.
2. **`index.html`**: Página de explicação sobre os conceitos abordados.
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

## Como Funciona o Fluxo

- O nó **Inject** envia uma mensagem com o texto "Mensagem Inicial".
- O nó **Function** pega essa mensagem e adiciona a frase " - Fluxo Processado".
- O nó **Switch** verifica se a mensagem contém a palavra "Fluxo" e, se sim, a envia para o nó **Debug**.
- O nó **Debug** exibe a mensagem processada no painel de debug.

## Melhorias Futuras

- Experimentar com outros operadores no nó **Switch** para realizar comparações mais complexas.
- Explorar o uso de **Flow Context** para armazenar informações temporárias entre mensagens.
- Criar fluxos mais complexos com múltiplas condições e manipulação de dados avançada.

