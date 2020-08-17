<h1 align="center">
  <img alt="Home" title="#Home" src="./.github/header.png" />
</h1>

<p align="center">O projeto foi criado para ser utilizado como guia (configurar de ambiente para desenvolvimento), visão geral sobre React e por fim apresentação de uma aplicação de listagem de pessoas, que será utilizado para ministrar o treinamento sobre React</p>

# 📝 Funcionalidades

- [x] Listagem de pessoas
- [x] Acessar perfil de uma pessoa

<h1 align="center">
  <img alt="Home" title="#Home" src="./.github/home.png" />
  <img alt="Home" title="#Home" src="./.github/detail.png" />
</h1>

# 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Choco](https://chocolatey.org)
- [Expo](https://expo.io/)
- [Node.js](https://nodejs.org/en/)
- [React Native](https://reactnative.dev/)
- [JavaScript](https://www.javascript.com/)

# 🖥️ Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas: `Choco`, `Node.js`, `Yarn`, `Expo` e `VSCode`

# 🛠️ Instalando ferramentas

# 🍫 Choco

Vá ao botão iniciar no canto inferior do windows e clique com botão direito, será aberto a tela abaixo, clique WindowsPowerShell e(Admin)

![Capturar](/.github/Capturar.png)

```bash
# Digite o seguinte comando:
$ Get-ExecutionPolicy
```

`Caso o retorno seja diferente de "Restricted" pode pular o próximo passo`

![powershell](/.github/powershell.png)

`Caso seja, restrito, digite a seguinte linha`

```bash
$ Set-ExecutionPolicy AllSigned
```

Agora vamos instalar o Choco

````bash
$ Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
````
![Choco](/.github/installChoco.png)

`Nesse passo e recomendavel fechar e abrir o terminal para subir as alterações`

## 📌 Yarn

```bash
$ choco install -g yarn
# Será feita a instalação de forma global.

# Verifique a versão
$ yarn -v
```

## ⌨ Node.js

```bash
# Versão lts é mais estável de bugs e erros do que a current (recente)
$ yarn install nodejs-lts

# Verifique a versão
$ node -v ou npm -v
```

## 🧱 VSCode

Acesse [Visual Code](https://code.visualstudio.com/Download), faça o download e instale conforme seu sistema

#### Extensões VSCode

Abra o VScode e no lado esquerdo clique na seguinte opção:

<img src=".github/plugin.png">

Terá uma barra de pesquisar

<img src=".github/seach.png">

Procure por:

- Dracula Official
- Color Highlight.
- Material Icon Theme.

  > Precisa fechar e abrir novamente o VScode para ficar visível a extensão.

- Rocketseat React Native.
- Rocketseat ReactJS.
  > Opcional essas últimas extensões.

#### 🧬 Instalando extensões

Clique na opção install (em verde):

<img src=".github/instalar.png">

## 💡 Expo

```bash
yarn global add expo-cli
```

# 😎 Criando o Projeto

```bash
# Criar um projeto react native/expo
$ expo init random-peoples
# Em seguinda sera solicitado o template que deseja utilizar, somente pressione enter.`

# Entre no repositório
$ cd random-peoples
```

# 👾 Instalando dependências

Para não perdemos muito tempo instalando depedências que serão utilizadas no decorrer do treinamento, iremos instalar antes, as seguintes dependências:

```bash
⚡ React Navigation
$ yarn add @react-navigation/native

$ expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

$ yarn add @react-navigation/stack

💥 Axios

$ yarn add axios

# Depois de instalar as dependências, inicie o projeto
$ expo start
```

Será aberta uma aba no seu navegador padrão, conforme imagem abaixo.

<img src=".github/localhost.png">

Agora e preciso executar o projeto no seu celular, para isso, acesse a Playstore ou AppStore e baixe o aplicativo `Expo`, ao abrir o aplicativo, clique em `Scan QR Code` e escaneie o QR da tela que foi aberta em seu navegador. Aguarde até que aparece uma tela igual a essa:

<img src=".github/app.png" height="500">

Até aqui, já configuramos todo o ambiente necessario para iniciamos o desenvolvimento, a baixo sera apresentado de forma resumida alguns topicos que serão abordados no treinamento.

# 🔮Conceitos React

## 💎 O que e react?

React e um ferramenta criada pelo facebook, seu intuito e facilitar o desenvolvimento de aplicacões web ( React JS) e mobile (React Native), utiliza como linguagem de desenvolvimento javascript.

No treinamento iremos focar exclusivamente no desenvolvimento de aplicações mobile, através do React Native, com ele e possivel criar aplicações hibridas que funcionam tanto no Android como no iOs somente com único código javascript.

E umas das ferramentas utilizadas por grandes empresas, como Uber, Netflix, WhatsApp.

Um dos pontos interessantes é que você aprende uma vez os conceitos obtidos no React JS ou React Native e utiliza a mesma base para os dois.

# 🖇Componente

Um componente e uma parte visual da sua aplicação, seriam pedaços de informações que compõe uma tela.

![Component](/.github/component.png)

1. Header (vermelho) - contém o titulo da aplicação
2. ListPeoples (Amarelo) - exibe a lista de pessoas

# 🧲 Props

Props `(propriedades)` são valores que podem ser passados para um componentes, podem ser string, númerico, até mesmo uma função, esses valores podem ser usados pelo componente que recebe e utilizados para alguma regra, esses valores somente pode ser lidos e `não alterados.`

# ⚖ State

State seriam variaveis utilizadas dentro de um componente que podem ser `(alteradas)`

# 🤴🏾 Ciclo de vida

Ciclo de vida seria fases que um componente tem, assim como uma pessoa, ela nasce, cresce e morre, com componente seria da mesma forma, mas utilizariamos outras expressões, como, montado, atualizado e desmotado. Seguindo esses conceito podemos executar determinado código em momentos particulares de acordo com a `fase` do componente.

![Component](/.github/ciclo_vida.png)

# 🎖 Contribuição

<table>
  <tr>
    <td align="center"><a href="https://github.com/kujikeo"><img style="border-radius: 50%;" src="https://avatars1.githubusercontent.com/u/36707552?s=400&u=054dea9df3967cd503ba9e7b15e030dd3fd30d29&v=4" width="100px;" alt=""/><br /><sub><b>Guilherme Machado</sub></a><br /><a href="https://github.com/kujikeo" title="Rocketseat">👨‍🚀</a></td>
    <td align="center"><a href="https://github.com/daviddossantos"><img style="border-radius: 50%;" src="https://avatars3.githubusercontent.com/u/37313667?s=460&u=c1b390572d44b705b0d01df81dc80eb7a7bbbf84&v=4" width="100px;" alt=""/><br /><sub><b>David Cruz</b></sub></a><br /><a href="https://github.com/daviddossantos" title="David Cruz">👨‍🚀</a></td>
  </tr>
</table>
