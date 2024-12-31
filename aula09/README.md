# Aula 09 -02 Node -RED - Novos Módulos e Manipulação de Variáveis no Node-RED

## Descrição
Nesta aula, vamos explorar novos módulos no Node-RED, aprender como criar múltiplas saídas para o nó **Function** e manipular variáveis de contexto, fluxo e globais. Também veremos como controlar o fluxo de dados usando essas variáveis e como elas podem ser úteis para armazenar e compartilhar informações entre diferentes nós do fluxo.

## Estrutura do Projeto

1. **`flows.json`**: Arquivo de fluxo do Node-RED, onde vamos configurar os nós e a lógica da nossa aplicação.
2. **`index.html`**: Página simples que introduz os conceitos abordados nesta aula.
3. **`style.css`**: Estilo básico para a interface de usuário.

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

- O nó **Inject** envia uma mensagem inicial com o texto "Mensagem inicial".
- O nó **Function** pega essa mensagem, adiciona o texto " - Fluxo Executado com Sucesso!" e a envia para a próxima etapa.
- O nó **Debug** exibe a mensagem final no painel de debug.

## Melhorias Futuras
- Experimentar com diferentes tipos de variáveis de contexto.
- Integrar módulos externos no fluxo para aumentar a complexidade.
- Explorar o uso de variáveis **flow** e **global** para compartilhar dados entre diferentes fluxos.

```
