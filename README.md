### Teste Técnico Desenvolvedor FullStack - Mobile
Teste de conhecimento técnico.

O teste consiste na execução dos tópicos listados abaixo, sendo obrigatórios os itens de "Geral, Mobile e Backend", e será levado em consideração como um diferencial caso execute também algum item da lista "Pontos extras".

**_Mobile_**
- [x] Desenvolver a tela de Splash;
- [x] Desenvolver a tela de Home, listando os ténis do backend e respeitando os filtros;
- [x] Desenvolver a tela de Details;
- [x] Desenvolver a tela de Success.

**_Backend_**
- [x] Rota de Listagem de ténis;
- [x] Rota de comprar ténis;
- [x] Construir duas tabelas: Product e Order.

**_Geral_**
- [x] GitFlow.

**_Ponto extra_**
- [ ] Clean Architecture;
- [x] Docker;
- [x] Desenvolver o backend com Nestjs(preferível) ou Nodejs.

**_Prototipo_**
- Link para o [Prototipo](https://xd.adobe.com/view/805c6555-3e18-4105-98e5-d5486211e920-d50f/)

**_Observação_**
- Todos os pontos [x] são obrigatórios. 
- Segue um schema do banco contido no arquivo schema.jsonc.
- As imagens para teste encontra-se na pasta images. 

# Challenge Instructions

### Clone this repository

```bash
git clone https://github.com/TheNeoCarvalho/desafio-fullstack-mobile.git
```

### Change directory

```bash
cd desafio-fullstack-mobile
```

### Install the dependecies

```bash
yarn
```

or

```bash
npm i
```

### Change the IP address in **src/services/api.js** file to IP address your server running

```bash
baseURL: 'http://IP:PORT'
```

### Running the app in Android

```bash
$ npm start
```
and
```bash
$ npx react-native run-android
```
