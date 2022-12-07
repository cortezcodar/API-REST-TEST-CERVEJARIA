# Documentação API-REST

# API-REST-TEST-CERVEJARIA

## 1° passo

git clone git@github.com:cortezcodar/API-REST-TEST-CERVEJARIA.git:

## 2° passo

cd API-REST-TEST-CERVEJARIA/Test-API/

## 3° passo

instalar dependendencia de desenvolvimento

A instalação é feita com o npm

npm i

## 4° passo

crie um banco com nome "produtos" na sua maquina local para fazer conexão com banco

## 5° passo .env

Para fazer conexão com banco de dados use .env
crie um arquivo .env
copie o conteudo do .env.example, para o ponto .env criado
e atualize os valore para conexão com banco de dados

```bash
DB_USER = root
DB_HOST = localhost
DB_NAME = produtos
DB_PASS = root
```

## 6° passo Para iniciar o projeto - dev

rode o comando

```bash
 npm run dev
```

## 7° passo sporty integracão

para gerar o token de autenticaçao voce ira precisar accessar o link abaixo

https://developer.spotify.com/console/get-current-user-playlists/?limit=&offset=

depois de acessar o link vai ate o final da tela, no botão verde escrito "obter token "
em seguida quando você clicar em "obter token" ira abrir uma modal para você selecionar escopos, marque a opção descrita baixo

playlist-modify-public

apos selecionar playlist-modify-public, você ira clicar em Request Token,

clicando em Request token, você ira pegar o token gerado, e colocar token gerado no .env,

exemplo

```bash
TOKEN_SPORTFY = Bearer BQCswIaenkMkpeWuDsYHfvsqMGr6xYtFGQNmdFS6QBpnlpnG-YNWbpyqD52fsr3XwhaAEIT6MnV5QFdBBOL2Mj52lKBLOXLlsoouNwR8TlA9MmZykUbkNOukA7qIzNwtq46W_NNGebayrlyiQU1l5cTTqqJigzkFQ01LmhGM1nIL4XCv9G3eStOAw730K9dKWznMMqpccfqE0hGjn6STPKDF642ngoTjSps
```

token tem expiração de 20 minutos, caso o token expire sera necessario gerar novamente outro token, de acordo com as instruções acima de como gerar token

## 8° passo abra o postman para testar suas rotas

caso não tenha o postman instalado na sua maquina

instale usando esse link

https://www.postman.com/downloads/

## 9° passo manda um Request para o postman de acordo com rota criada para testar seu endpoint

exemplo de request para criação de cerveja

```bash
curl --location --request POST 'http://localhost:3000/cervejas' \
--header 'Content-Type: application/json' \
--data-raw '{
   "name": "skol",
    "temperaturaMin": 0,
   "temperaturaMax": 1

}'

```

vai obter uma resposta

```json
{
    "cerveja": {
        "name": "skol",
        "temperaturaMax": 1,
        "temperaturaMin": 0,
        "id": 12,
        "criado_Em": "2022-12-07T19:01:05.491Z",
        "atualizado_em": "2022-12-07T19:01:05.491Z"
    }
}
```

exemplo de request para atualizar nome da cerveja e temperatura

```bash
curl --location --request PUT 'http://localhost:3000/cervejas/1' \
--header 'Content-Type: application/json' \
--data-raw '{

    "name": "Weissbier",
   "temperaturaMax":"3",
   "temperaturaMin":"-1"

}'
```

vai obter uma resposta

```json
{
    "generatedMaps": [],
    "raw": [],
    "affected": 1
}
```

exemplo de request para deletar Cervejas Por ID

```bash
curl --location --request DELETE 'http://localhost:3000/cervejas/12' \
--data-raw ''
```

vai obter uma resposta apos Produto deletado

```json
{
    "msg": " Produto deletado com sucesso "
}
```

exemplo de request para trazer a lista das cervejas cadastrada

```bash
curl --location --request GET 'http://localhost:3000/cervejas' \
--header 'Content-Type: application/json' \
--data-raw '{
}'
```

vai obter uma resposta

```json
  {
        "id": 1,
        "name": "Weissbier",
        "temperaturaMax": "3.00",
        "temperaturaMin": "-1.00",
        "criado_Em": "2022-12-06T14:16:27.548Z",
        "atualizado_em": "2022-12-07T15:49:39.000Z"
    },
    {
        "id": 2,
        "name": "Pilsen",
        "temperaturaMax": "4.00",
        "temperaturaMin": "-2.00",
        "criado_Em": "2022-12-06T14:17:47.576Z",
        "atualizado_em": "2022-12-06T19:13:57.000Z"
    },
    {
        "id": 3,
        "name": "Weizenbier",
        "temperaturaMax": "6.00",
        "temperaturaMin": "-4.00",
        "criado_Em": "2022-12-06T14:18:28.228Z",
        "atualizado_em": "2022-12-06T19:12:59.000Z"
    },
    {
        "id": 4,
        "name": "cerveja vermelha",
        "temperaturaMax": "5.00",
        "temperaturaMin": "-5.00",
        "criado_Em": "2022-12-06T14:18:50.498Z",
        "atualizado_em": "2022-12-06T19:12:36.000Z"
    },
    {
        "id": 5,
        "name": "India Pale Ale",
        "temperaturaMax": "7.00",
        "temperaturaMin": "-6.00",
        "criado_Em": "2022-12-06T14:19:15.327Z",
        "atualizado_em": "2022-12-06T19:11:48.000Z"
    },
    {
        "id": 6,
        "name": "IPA",
        "temperaturaMax": "10.00",
        "temperaturaMin": "-7.00",
        "criado_Em": "2022-12-06T14:19:36.281Z",
        "atualizado_em": "2022-12-06T19:11:10.000Z"
    },
    {
        "id": 7,
        "name": "Dunkel",
        "temperaturaMax": "2.00",
        "temperaturaMin": "-8.00",
        "criado_Em": "2022-12-06T14:20:01.768Z",
        "atualizado_em": "2022-12-06T19:10:40.000Z"
    },
    {
        "id": 8,
        "name": "Imperial Stouts",
        "temperaturaMax": "13.00",
        "temperaturaMin": "-10.00",
        "criado_Em": "2022-12-06T14:20:23.352Z",
        "atualizado_em": "2022-12-06T19:10:01.000Z"
    },
    {
        "id": 9,
        "name": "cerveja marrom",
        "temperaturaMax": "14.00",
        "temperaturaMin": "0.00",
        "criado_Em": "2022-12-06T14:36:15.481Z",
        "atualizado_em": "2022-12-06T19:09:04.000Z"
    }
```

exemplo de request para buscar cerveja por temperatura

```bash
curl --location --request GET 'http://localhost:3000/cervejas/buscar?temperatura= 11' \
--data-raw ''
```

vai obter uma resposta

```json

    {
        "beerStyle": "cerveja marrom",
        "playlist": {
            "name": "Praia, Cerveja, Sol: Reggae, Pop Rock, Surf Music, Ska, Mpb, Reggae Fusion, Folk, Hip Hop, Rap Rock",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/5L5pSKkfEnf0KLKz0zufcP/tracks",
                "total": 572
            }
        }
    },
    {
        "beerStyle": "Imperial Stouts",
        "playlist": {
            "name": "This Is The Imperials",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DZ06evO0udy1S/tracks",
                "total": 50
            }
        }
    }
```

ao inserir a Temperatura da cerveja desejada

(Se o input foi -11 e temos as cervejas Imperial Stouts,cerveja marrom )

nome selecionado é Cerveja marrom e Imperial Stouts,
Porem quem vem primeiro e cerveja marrom Por causa da ordem alfabetica

```bash
curl --location --request GET 'http://localhost:3000/cervejas/buscar?temperatura= 11' \
--data-raw ''
```

```json

    {
        "beerStyle": "cerveja marrom",
        "playlist": {
            "name": "Praia, Cerveja, Sol: Reggae, Pop Rock, Surf Music, Ska, Mpb, Reggae Fusion, Folk, Hip Hop, Rap Rock",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/5L5pSKkfEnf0KLKz0zufcP/tracks",
                "total": 572
            }
        }
    },
    {
        "beerStyle": "Imperial Stouts",
        "playlist": {
            "name": "This Is The Imperials",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DZ06evO0udy1S/tracks",
                "total": 50
            }
        }
    }
```

## build do projeto

Para executar o build rode os comando abaixo

```bash
npm run build
```

## Deploy em produção

