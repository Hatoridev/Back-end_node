# Aula 02 - Criando Rotas com Express

## Objetivo
Nesta aula, aprenderemos a:
- Criar rotas utilizando o framework **Express**.
- Manipular arquivos com o módulo `fs`.
- Entender como rodar um projeto Node.js.

---

## Arquivos

- **server.js**: Configura o servidor utilizando Express.
- **routes.js**: Define as rotas da aplicação.
- **index.html**: Página principal com seções de Início, Sobre e Contato.
- **sobre.html**: Página com informações sobre o site.
- **contato.html**: Página com informações de contato.
- **style.css**: Estilos básicos para a página.

---

## Como Rodar o Projeto no Termux

### Passo 1: Instalar o Node.js

Verifique se o **Node.js** está instalado em seu ambiente. Para instalar no Termux, execute:

```bash
pkg install nodejs
```

### Passo 2: Instalar o Express

Antes de rodar o servidor, você precisa instalar o **Express**. Para isso, dentro do diretório do seu projeto, execute o seguinte comando:

```bash
npm install express
```

Isso instalará o **Express** e suas dependências.

### Passo 3: Rodar o servidor

Após a instalação do **Express**, você pode rodar o servidor com o comando:

```bash
node server.js
```

O servidor estará rodando em `http://localhost:3000`. Agora você pode acessar:

- `http://localhost:3000/` para a página inicial.
- `http://localhost:3000/sobre` para a página "Sobre".
- `http://localhost:3000/contato` para a página "Contato".
```
