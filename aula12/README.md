# Aula 12 -05 Node-Red - Criando uma API REST no Node-RED

## Descrição
Na Aula 05, vamos criar uma API REST simples usando o Node-RED. A API irá retornar dados simulados sobre um usuário em formato JSON. Vamos utilizar os nós **HTTP In**, **Function**, e **HTTP Response** para criar a API e responder a requisições GET.

## Estrutura do Projeto

1. **`flows.json`**: Arquivo com o fluxo do Node-RED para criar a API.
2. **`index.html`**: Página de explicação sobre como a API funciona.
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

7. Acesse a API criada em: [http://localhost:1880/api/usuario](http://localhost:1880/api/usuario)

## Como Funciona o Fluxo

- O nó **Inject** envia uma mensagem com dados simulados (nome e idade do usuário).
- O nó **HTTP In** define a rota de API `/api/usuario` que será acessada via requisição GET.
- O nó **Function** processa a mensagem e define os dados simulados a serem retornados pela API.
- O nó **HTTP Response** envia os dados como resposta da API para o cliente.

## Melhorias Futuras

- Adicionar mais endpoints à API, como `/api/usuario/:id` para acessar informações de usuários específicos.
- Integrar com um banco de dados real para armazenar e recuperar dados de usuários.
- Implementar autenticação e autorização para a API.

