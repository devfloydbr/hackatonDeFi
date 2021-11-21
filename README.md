<p align="center">
  <h1 align="center" style="color:#8257E5">transfer</h1>
  <p align="center">DeFi para todos</<p>
</p>

<p align="center">Um aplicativo que vai elevar a experiência a experiência de pessoas em eventos de entretenimento.</p>

<div align="center">

### 🎲 Rodando a API

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js 14.17.0](https://nodejs.org/download/release/v14.17.0/). 

Além disto é necessário ter a API_KEY do blockforce, que pode ser adquirida nesse link [Blockforce - Cryptum](https://docs.cryptum.io/#section/API-keys)

```bash
# Clone este repositório
$ git clone <https://github.com/devfloydbr/hackatonDeFi>

# Acesse a pasta do projeto no terminal/cmd
$ cd hackatonDeFi

# Vá para a pasta server
$ cd api

# Instale as dependências
$ yarn

# Adicione a API KEY adquirida anteriormente no arquivo .env

CRYPTUM_API_KEY=[SUA_API_KEY]

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# O servidor inciará na porta:3333
```

### Configurando API Debugger

<p>Note que dentro do diretório /api contém um arquivo apitransfer.json
<br />
Basta importar o arquivo no seu programa favorito ( como Postman ou Insomnia ) e você terá a configuração dos endpoints para utilização da API. 
</P>
</div>

<div align="center">

### 🎲 Rodando o client

### Pré-requisitos

Além das dos requisitos necessários na etapa de execução da API, você vai precisar também do [Expo-CLI](https://docs.expo.dev/workflow/expo-cli/) instalado globalmente na máquina, para isso:

```bash

$ npm install -g expo-cli

```

Depois disso, na raiz do repositório, execute os comandos:

```bash

# Vá para a pasta client

$ cd client

# Instale as dependências

$ yarn

# Execute a aplicação

$ yarn start

```
Depois disso, o Expo será executado e você poderá rodar a aplicação tanto no seu aparelho celular ou emulador.


</div>

