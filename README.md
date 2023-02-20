# Delivery App

## Sumário

* [Contexto](#contexto)
* [Principais Tecnologias Usadas](#principais-tecnologias-usadas)
* [Rodando o Projeto Localmente](#rodando-o-projeto-localmente)
* [Login](#login)
* [Menbros do grupo](#menbros-do-grupo)
* [Observações](#observações)

## Contexto

Esse é um projeto full stack feito em um grupo de cinco pessoas usando algumas técnicas de metodologias ágeis. 

O projeto Delivery App ou Gaguin Delivery como eu gosto de chamar foi o último projeto do módulo de back end do curso da Trybe. E ele se baseia na ideia de um aplicativo de delivery de bebidas.

O front-end foi feito usando a ideia de componentes onde nós nos reunimos em grupo para ver as partes que mais se repetiam no figma do projeto e poderiam ser usadas em mais de uma tela. Após isso separamos o'que cada um ia fazer e seguimos de forma assíncrona. Nos reunimos todos os dias em DMs para atualizar um ao outro sobre a sua tarefa, e em caso de dificuldade conversamos pelo Dicord.

O back-end foi feito antes do front e de forma síncrona e em pair programming. Dessa forma todos estavam familiarizados com as rotas da API e seus retornos. As rotas também foram todas criadas usando como base o fluxo mostrado no figma do projeto.

## Principais Tecnologias Usadas
* [ReactJS](https://pt-br.reactjs.org/) - Para todo o front-end;
* [SCSS/SASS](https://sass-lang.com/) - Para estilização do projeto;
* [NodeJS](https://nodejs.org/en/) - Para a construção da API;
* [MySQL](https://www.mysql.com/) - Para o banco de dados;
* [Sequelize](https://sequelize.org/) - Para comunicação com o banco de dados;
* [Redux](https://redux.js.org/) - para consumo da API no front-end;
* [Docker](https://www.docker.com/) (opcional) - Usado para instalação das dependências de forma virtual. Evitando o conflito entre versões e a instalação de dependências indesejadas diretamente na sua máquina.

## Rodando o Projeto Localmente

Aqui você vai encontrar instruções para rodar uma cópia do projeto na sua máquina.

⚠️ Para rodar esse projeto de qualquer um dos modos, primeiro você tem que remover o “.exemple” do arquivo “.env.exemple”. Localizado na raiz do diretório back-end.

#### Sem o Docker
Para conseguir rodar esse projeto sem o docker você precisa ter o MySQL instalado localmente na sua máquina.

Na pasta raiz do projeto você deve usar esse script no terminal:
```
npm run dev:prestart
```
Na pasta front-end você deve usar esse script no terminal:
```
npm run start
```
E na pasta back-end você deve usar esse script no terminal:
```
npm run dev
```
Use este script na pasta raiz caso o banco de dados ainda não tenha sido povoado ou se você quiser resetar ele: 
```
npm run db:reset
```

#### Com o Docker
Na pasta raiz do projeto você deve usar estes comandos no terminal:
```
npm run dev:prestart

docker-compose up -d
```
Na pasta front-end você deve usar estes comandos no terminal:
```
docker exec -it delivery_app_frontend bash

npm run start
```
E na pasta back-end você deve usar estes comandos no terminal:
```
docker exec -it delivery_app_backend bash

npm run dev
```
Use este script na pasta raiz caso o banco de dados ainda não tenha sido povoado ou se você quiser resetar ele: 
```
npm run db:reset
```

### Login
Você pode fazer login como vendedor, consumidor, administrador (somente o adm pode criar uma conta de vendedor) ou criar sua própria conta como consumidor.

consumidor
```
email: zebirita@email.com
senha: $#zebirita#$
```

vendedor
```
email: fulana@deliveryapp.com
senha: fulana@123
```

administrador
```
email: adm@deliveryapp.com
senha: --adm2@21!!--
```

## Menbros do grupo
* [Eu/Arthur Martins](https://www.linkedin.com/in/arthur-martins-leal-peixoto/)
* [Gabriel Caminha](https://www.linkedin.com/in/caminha-gabriel/)
* [Daniel Erhardt Cardoso](https://www.linkedin.com/in/daniel-erhcardoso/)
* [Caio de Sousa (Sony)](https://www.linkedin.com/in/sshcaio/)
* [Samuel Gonçalves](https://www.linkedin.com/in/samuel5g/)

## Observações

Os scripts e alguns dos arquivos de configuração do projeto foram feitos pela Trybe.

Toda a estilização do projeto foi feita por mim. 
