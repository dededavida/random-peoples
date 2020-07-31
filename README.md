# Instalações necessárias
Será necessários os seguintes programas: 
###### Nodejs
###### Yarn
###### Expo

## Yarn
Acesse como administrador o power shell do windows e execute o seguinte comando:
````bash
npm install -g yarn
````
Será feita a isntalação de forma global.

Verifique a versão
````bash
yarn -v
````

## Nodejs
Acesse o cmd e digte:
```bash
yarn install nodejs-lts
```
Versão lts é mais estável de bugs e erros do que a Current (recente).

No terminal digite uma das opções abaixo: 
````bash
node -v ou npm -v
````
Irá retornar qual versão está instalada em sua maquina, caso não aparece corretamente, é porque não foi instalado.

## VSCODE
Acesse [Visual Code ](https://code.visualstudio.com/Download), faça o download e instale conforme seu sistema.

#### EXTENSÕES VSCODE
Abra o VScode e no lado esquerdo clique na seguinte opção:
<center>
<img src=".github/vscode.png">
</center>

Terá uma barra de pesquisar

<center>
<img src=".github/seacrh.png">
</center>

Procure por:

*   Dracula Official
*   Color Highlight.
*   Material Icon Theme.

    > Precisa fechar e abrir novamente o VScode para ficar visível a extensão.

*   Rocketseat React Native.
*   Rocketseat ReactJS.
    > Opcional essas últimas extensões.

###### Install exntesão
Só clicar nessa opção install (em verde):
<center>
<img src=".github/instaal.png">
</center>

## Expo 
Pode ser feita a instalação do expo de duas formas:
````bash
yarn global add expo-cli
````
ou 
````bash
npm install -g expo-cli
````

## Criado/Rodando projeto
Agora vamos criar o projeto, acesse uma pasta via CMD, e digite 
````bash
expo init random-peoples
```` 

### Rodar
Para rodar é bem simples, digite 
````bash
expo  start
````  
ou se tiver yarn instalado
````bash
yarn  start
````  

<center>
<img src=".github/localhost.png">
</center>
Será aberta uma aba no seu navegador padrão. Para rodar você terá que procurar o aplicativo do Expo na googlpay e instalar, ao abrir o app você clique em Scnear QR Code, e no seu navegar terá esse QR Code, escaneie com seu celular. 