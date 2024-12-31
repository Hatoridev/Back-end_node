# Aula 17 - 10 Node-RED - Dashboard no Node-RED

## Descrição
Nesta aula, vamos aprender a criar e personalizar um Dashboard no Node-RED. Vamos usar nós como `ui_gauge`, `ui_button`, e outros para construir uma interface simples de monitoramento de dados (temperatura, no caso).

## Estrutura do Projeto
1. **`index.html`**: Página simples que contém o título, dados do Dashboard e um botão para iniciar o monitoramento.
2. **`style.css`**: Arquivo CSS para estilizar a interface.
3. **`flows.json`**: Arquivo de fluxo do Node-RED que cria a funcionalidade do Dashboard.

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

7. Abra `index.html` em um navegador e interaja com a página para visualizar o Dashboard.

## Como Funciona

- O fluxo simula o monitoramento de temperatura.
- O botão inicia o processo de monitoramento, e a cada vez que ele é pressionado, a temperatura é atualizada com um valor aleatório (de 0 a 100).
- O valor da temperatura é exibido no Dashboard como um medidor (gauge).

## Melhorias Futuras
- Personalizar o Dashboard com mais gráficos e controles.
- Conectar o Dashboard a sensores reais de temperatura.
- Adicionar mais funcionalidades interativas.

