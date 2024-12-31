# Aula 08 -01 Node - RED- Introdução ao Node-RED

## Descrição
Na primeira aula, vamos aprender a configurar o Node-RED, criar o primeiro fluxo e trabalhar com o nó **Function**. O nó **Function** nos permite executar código JavaScript diretamente dentro do fluxo, manipulando dados conforme necessário.

## Estrutura do Projeto

1. **`index.html`**: Página simples de introdução à aula.
2. **`style.css`**: Estilo básico para a página.
3. **`flows.json`**: Arquivo de fluxo do Node-RED. Ele define o fluxo que iremos usar nesta aula.

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

6. Importe o fluxo do arquivo `flows.json` para o Node-RED:

    - Dentro da interface do Node-RED, clique no menu (ícone de três linhas no canto superior direito).
    - Selecione "Importar" e cole o conteúdo do arquivo `flows.json`.
    - Clique em "Importar" e depois em "Deploy" para que o fluxo seja ativado.

7. Acesse a URL [http://localhost:1880/aula01](http://localhost:1880/aula01) no seu navegador para visualizar a resposta do fluxo.

## Como Funciona o Fluxo

- O nó **Inject** envia uma mensagem inicial com o texto "Olá, Node-RED!".
- O nó **Function** pega essa mensagem, adiciona um texto extra " - Fluxo Executado com Sucesso!" e retorna a mensagem modificada.
- O nó **Debug** exibe a mensagem final no painel de debug.

## Melhorias Futuras
- Adicionar mais nós para trabalhar com outros tipos de dados.
- Explorar fluxos mais complexos com manipulação de variáveis e integrações externas.
```

Agora, ao seguir o passo a passo acima, o aluno conseguirá importar o fluxo e ver a execução do fluxo básico no Node-RED.
