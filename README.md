# NLW3_HAPPY
Projeto de orfanatos Happy trazido pela semana NLW da RocketSeat.
Este projeto é realizado com nodeJS, React e ReactNative, utilizando Typescript e no Expo, no ReactNative.

## Introdução

É apresentado neste projeto de forma básica, a criação, a listagem e o filtro de orfanatos apresentados em um mapa fixo.
Para a parte do NodeJS, foi utlizado o TypeORM para realizar as migrations e conectar ao banco de dados SQLite.
Enquanto no ReactNative, foi utlizado o Expo em um dispositivo físico para a apresentação do FrontEnd.

## Preparação

Ao baixar o projeto, é necessário rodar:

```
yarn
```
Em cada uma das pastas (backend, web, mobile) para instalar as dependências de cada sub-projeto.

## Backend

Instalado as dependências, é necessário criar o banco de dados. O utlizado neste projeto foi o SQLite e a integração com o TypeORM pode ser encontrado no ormconfig.json na raiz da pasta backend.
Para criar o banco de dados e rodar as migrations já criadas, é necessário rodar:
```
yarn typeorm migration:run
```
Isso vai fazer com que o banco seja criado e as tabelas também.
Para rodar o projeto no backend é só necessário rodar:
```
yarn dev
```
Que ele irá rodar na porta 3333.
Caso não queira testar diretamente a aplicação no frontend, foi utlizado o [Insomnia](https://insomnia.rest/) para testar as rotas.

#### Tratativa das urls das imagens do backend
Por ser uma aplicação completa que abrange também o mobile, esta versão básica, mesmo não apresentando variáveis ambientes precisa de alterações para visualizar imagens no dispositivo fixo.
Para isso, é necessário ir na pasta Views, dentro de src, e em images_views.ts alterar a url para o ip da sua máquina.

## FrontEnd Web
Após a instalação das dependências, você simplesmente pode rodar:
```
yarn start
```
Que abrirá uma página no seu navegador.
Nesta versão web básica, você terá acesso a localização dos orfanatos, podendo clicar nelas para maiores informações(podendo até mesmo utilizar o google maps routes) e criação das mesmas para um mapa pré-definido.
Futuramente o projeto poderá ser atualizado para resgatar a sua localização de forma dinâmica.

## FrontEnd Mobile
Após a instalação das dependências, você simplesmente pode rodar:
```
yarn start
```
E assim abrirá uma página na web, com opções na aba a esquerda da pagína, onde você poderá se conectar a emuladores, web ou dispositivo físico. 
Para o dispositivo físico, é necessário ter o expo também instalado nele e utilizar o QRCode para baixar o projeto.

Assim como na web, esta versão te da acesso a localização dos orfanatos em um mapa pré-definido, podendo ver novas informações e também é possível criar novos orfanatos, utilizando as ferramentas do dispositivo, solicitando permissão pra trativa de imagens, etc.

#### Tratativa das urls no Mobile

É necessário, assim como no backend, fazer uma tratativa de url, para que as requisições sejam feitas de forma apropriada.
Se você estiver em um dispositivo físico IOS ou em um emulador IOS, 
```
http://localhost:3333
```
é mais do que necessário para fazer funcionar.
Se você estiver em um emulador android, você precisará rodar no terminal:
```
adb reverse tcp:3333 tcp:3333
```
Para poder utilizar o localhost
E se você estiver em um dispositivo físico android, você vai precisar entrar na pasta mobile/src/services e em api.ts, alterar a url para o ip da sua máquina, liberando a porta 3333.
