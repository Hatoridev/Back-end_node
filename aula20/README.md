# Aula 20 -13 Node-RED - Integração de Node-RED com API Externa (API de Clima)

## Descrição
Nesta aula, vamos aprender a integrar o Node-RED com uma API externa. Usaremos uma API de clima (OpenWeatherMap) para obter informações meteorológicas e exibir essas informações no fluxo. Esta prática é importante para aprender como trabalhar com dados de APIs externas em tempo real.

## Estrutura do Projeto

1. **`index.html`**: Página simples com os tópicos da aula.
2. **`style.css`**: Arquivo CSS para estilizar a página.
3. **`flows.json`**: Arquivo de fluxo do Node-RED para consumir a API de clima e manipular os dados.

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

7. Crie uma conta no [OpenWeatherMap](https://openweathermap.org/) e obtenha uma chave de API. Substitua `SUA_CHAVE_DE_API` no arquivo `flows.json` pela chave obtida.

8. Abra o fluxo e clique em "Deploy".

9. Acesse `http://localhost:1880/clima` para visualizar os dados do clima de São Paulo.

---

## Como Funciona o Fluxo

- O **nó HTTP In** escuta uma requisição GET no endpoint `/clima`.
- O **nó HTTP Request** faz uma chamada GET à API de clima da OpenWeatherMap.
- O **nó Function** processa a resposta da API, extraindo a temperatura, descrição e cidade.
- O **nó HTTP Response** envia os dados de volta ao cliente que fez a requisição.

