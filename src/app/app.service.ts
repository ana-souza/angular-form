import {Injectable} from '@angular/core';
import {Questions} from './app.component';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { HttpHeaders } from '@angular/common/http';


const questions: Questions[] = [
  {
      "id": 1,
      "name": "Tom de pele",
      "question": "Qual tom mais se aproxima do seu tom de pele?",
      "order": 1,
      "type": 1,
      "hasError": false,
      "errorMessage": null,
      "options": [
          {
              "id": 1,
              "name": "Muito clara",
              "imageUrl": "/tom-pele/muito-clara.png",
              "order": 0,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 2,
              "name": "Clara",
              "imageUrl": "/tom-pele/clara.png",
              "order": 1,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 78,
              "name": "Clara Média",
              "imageUrl": "/tom-pele/clara-media.png",
              "order": 2,
              "singleOption": false,
              "checked": true
          },
          {
              "id": 79,
              "name": "Escura Média",
              "imageUrl": "/tom-pele/escura-media.png",
              "order": 3,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 80,
              "name": "Escura",
              "imageUrl": "/tom-pele/escura.png",
              "order": 4,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 81,
              "name": "Muito escura",
              "imageUrl": "/tom-pele/muito-escura.png",
              "order": 5,
              "singleOption": false,
              "checked": false
          }
      ]
  },
  {
      "id": 2,
      "name": "Tipo de pele facial",
      "question": "Como você descreveria a sua pele facial?",
      "order": 2,
      "type": 1,
      "hasError": false,
      "errorMessage": null,
      "options": [
          {
              "id": 6,
              "name": "Seca",
              "imageUrl": "/tipo-pele-facial/seca.png",
              "order": 0,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 7,
              "name": "Normal",
              "imageUrl": "/tipo-pele-facial/normal.png",
              "order": 1,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 8,
              "name": "Oleosa",
              "imageUrl": "/tipo-pele-facial/oleosa.png",
              "order": 2,
              "singleOption": false,
              "checked": true
          },
          {
              "id": 9,
              "name": "Mista (parte seca, parte oleosa)",
              "imageUrl": "/tipo-pele-facial/mista.png",
              "order": 3,
              "singleOption": false,
              "checked": false
          }
      ]
  },
  {
      "id": 12,
      "name": "Tipo de problema de pele facial",
      "question": "Quais problemas em relação à sua pele facial te preocupam hoje? Selecione quantas alternativas desejar.",
      "order": 3,
      "type": 2,
      "hasError": false,
      "errorMessage": null,
      "options": [
          {
              "id": 82,
              "name": "Acne",
              "imageUrl": "/problemas-pele-facial/acne.png",
              "order": 0,
              "singleOption": false,
              "checked": true
          },
          {
              "id": 83,
              "name": "Cravos",
              "imageUrl": "/problemas-pele-facial/cravos.png",
              "order": 1,
              "singleOption": false,
              "checked": true
          },
          {
              "id": 60,
              "name": "Oleosidade excessiva",
              "imageUrl": "/problemas-pele-facial/oleosidade-excessiva.png",
              "order": 2,
              "singleOption": false,
              "checked": true
          },
          {
              "id": 84,
              "name": "Poros Dilatados",
              "imageUrl": "/problemas-pele-facial/poros-dilatados.png",
              "order": 3,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 63,
              "name": "Sensibilidade",
              "imageUrl": "/problemas-pele-facial/sensibilidade.png",
              "order": 4,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 85,
              "name": "Olheiras",
              "imageUrl": "/problemas-pele-facial/olheiras.png",
              "order": 5,
              "singleOption": false,
              "checked": true
          },
          {
              "id": 64,
              "name": "Proteção solar",
              "imageUrl": "/problemas-pele-facial/protecao-solar.png",
              "order": 7,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 62,
              "name": "Linhas finas/Rugas",
              "imageUrl": "/problemas-pele-facial/linhas-finas-rugas.png",
              "order": 8,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 61,
              "name": "Manchas",
              "imageUrl": "/problemas-pele-facial/manchas.png",
              "order": 9,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 66,
              "name": "Sardas",
              "imageUrl": "/problemas-pele-facial/sardas.png",
              "order": 10,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 86,
              "name": "Dermatite",
              "imageUrl": "/problemas-pele-facial/dermatite.png",
              "order": 11,
              "singleOption": false,
              "checked": true
          },
          {
              "id": 87,
              "name": "Vermelhidão/Rosácea",
              "imageUrl": "/problemas-pele-facial/vermelhidao-rosacea.png",
              "order": 12,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 67,
              "name": "Nenhum das anteriores",
              "imageUrl": "/problemas-pele-facial/nenhuma.png",
              "order": 13,
              "singleOption": true,
              "checked": false
          }
      ]
  },
  {
      "id": 5,
      "name": "Tipo de fio de cabelo",
      "question": "Como está o seu cabelo hoje?",
      "order": 4,
      "type": 1,
      "hasError": false,
      "errorMessage": null,
      "options": [
          {
              "id": 18,
              "name": "Liso ",
              "imageUrl": "/tipo-fio/liso-.png",
              "order": 0,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 32,
              "name": "Alisado",
              "imageUrl": "/tipo-fio/alisado.png",
              "order": 1,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 19,
              "name": "Ondulado",
              "imageUrl": "/tipo-fio/ondulado.png",
              "order": 2,
              "singleOption": false,
              "checked": true
          },
          {
              "id": 20,
              "name": "Cacheado",
              "imageUrl": "/tipo-fio/cacheado.png",
              "order": 3,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 21,
              "name": "Crespo",
              "imageUrl": "/tipo-fio/crespo.png",
              "order": 4,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 34,
              "name": "Faço permanente",
              "imageUrl": "/tipo-fio/permanente.png",
              "order": 5,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 191,
              "name": "Muito curto para fazer um rabo de cavalo",
              "imageUrl": "/tipo-fio/muito-curto.png",
              "order": 6,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 192,
              "name": "Estou careca (pular todas as perguntas sobre cabelo)",
              "imageUrl": "/tipo-fio/careca.png",
              "order": 7,
              "singleOption": false,
              "checked": false
          }
      ]
  },
  {
      "id": 6,
      "name": "Cor do cabelo",
      "question": "E qual a cor dos seus fios hoje?",
      "order": 5,
      "type": 1,
      "hasError": false,
      "errorMessage": null,
      "options": [
          {
              "id": 22,
              "name": "Preto",
              "imageUrl": "/cor-cabelo/preto.png",
              "order": 0,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 90,
              "name": "Castanho Escuro",
              "imageUrl": "/cor-cabelo/castanho-escuro.png",
              "order": 1,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 91,
              "name": "Castanho Claro",
              "imageUrl": "/cor-cabelo/castanho-claro.png",
              "order": 2,
              "singleOption": false,
              "checked": true
          },
          {
              "id": 92,
              "name": "Loiro escuro",
              "imageUrl": "/cor-cabelo/loiro-escuro.png",
              "order": 3,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 93,
              "name": "Loiro claro",
              "imageUrl": "/cor-cabelo/loiro-claro.png",
              "order": 4,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 26,
              "name": "Ruivo",
              "imageUrl": "/cor-cabelo/ruivo.png",
              "order": 5,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 27,
              "name": "Branco / Grisalho",
              "imageUrl": "/cor-cabelo/branco-grisalho.png",
              "order": 6,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 28,
              "name": "Outro",
              "imageUrl": "/cor-cabelo/outro.png",
              "order": 7,
              "singleOption": false,
              "checked": false
          }
      ]
  },
  {
      "id": 7,
      "name": "Química no cabelo",
      "question": "Você tem o hábito de pintar os seus cabelos?",
      "order": 6,
      "type": 1,
      "hasError": false,
      "errorMessage": null,
      "options": [
          {
              "id": 36,
              "name": "Não tenho hábito de pintar",
              "imageUrl": "/quimica/fios-naturais.png",
              "order": 1,
              "singleOption": true,
              "checked": true
          },
          {
              "id": 31,
              "name": "Faço luzes / descoloração",
              "imageUrl": "/quimica/luzes-descoloracao.png",
              "order": 2,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 94,
              "name": "Preto",
              "imageUrl": "/quimica/preto.png",
              "order": 3,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 95,
              "name": "Castanho Escuro",
              "imageUrl": "/quimica/castanho-escuro.png",
              "order": 4,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 96,
              "name": "Castanho Claro",
              "imageUrl": "/quimica/castanho-claro.png",
              "order": 5,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 97,
              "name": "Loiro escuro",
              "imageUrl": "/quimica/loiro-escuro.png",
              "order": 6,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 98,
              "name": "Loiro claro",
              "imageUrl": "/quimica/loiro-claro.png",
              "order": 7,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 99,
              "name": "Ruivo",
              "imageUrl": "/quimica/ruivo.png",
              "order": 8,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 100,
              "name": "Gosto de cores diferentes (rosa, azul, verde)",
              "imageUrl": "/quimica/cores-diferentes.png",
              "order": 9,
              "singleOption": false,
              "checked": false
          }
      ]
  },
  {
      "id": 4,
      "name": "Tipo de cabelo",
      "question": "Como você descreveria o seu cabelo? Selecione quantas alternativas desejar.",
      "order": 7,
      "type": 2,
      "hasError": false,
      "errorMessage": null,
      "options": [
          {
              "id": 101,
              "name": "Fino",
              "imageUrl": "/tipo-cabelo/fino.png",
              "order": 1,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 102,
              "name": "Grosso",
              "imageUrl": "/tipo-cabelo/grosso.png",
              "order": 2,
              "singleOption": false,
              "checked": true
          },
          {
              "id": 14,
              "name": "Seco",
              "imageUrl": "/tipo-cabelo/seco.png",
              "order": 3,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 15,
              "name": "Normal",
              "imageUrl": "/tipo-cabelo/normal.png",
              "order": 4,
              "singleOption": false,
              "checked": true
          },
          {
              "id": 16,
              "name": "Oleoso",
              "imageUrl": "/tipo-cabelo/oleoso.png",
              "order": 5,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 17,
              "name": "Misto (pontas secas e raízes oleosas)",
              "imageUrl": "/tipo-cabelo/misto.png",
              "order": 6,
              "singleOption": false,
              "checked": true
          }
      ]
  },
  {
      "id": 16,
      "name": "Problemas em relação ao seu cabelo te preocupam",
      "question": "E quais problemas em relação ao seu cabelo te preocupam hoje? Selecione quantas alternativas desejar.",
      "order": 8,
      "type": 2,
      "hasError": false,
      "errorMessage": null,
      "options": [
          {
              "id": 103,
              "name": "Excesso de volume",
              "imageUrl": "/problemas-cabelo/excesso-de-volume.png",
              "order": 1,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 104,
              "name": "Falta de volume",
              "imageUrl": "/problemas-cabelo/falta-de-volume.png",
              "order": 2,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 105,
              "name": "Pontas duplas",
              "imageUrl": "/problemas-cabelo/pontas-duplas.png",
              "order": 3,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 106,
              "name": "Ressecamento",
              "imageUrl": "/problemas-cabelo/ressecamento.png",
              "order": 4,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 107,
              "name": "Frizz",
              "imageUrl": "/problemas-cabelo/frizz.png",
              "order": 5,
              "singleOption": false,
              "checked": true
          },
          {
              "id": 108,
              "name": "Fios danificados",
              "imageUrl": "/problemas-cabelo/fios-danificados.png",
              "order": 6,
              "singleOption": false,
              "checked": true
          },
          {
              "id": 109,
              "name": "Fios quebradiços",
              "imageUrl": "/problemas-cabelo/fios-quebradicos.png",
              "order": 7,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 110,
              "name": "Excesso de química",
              "imageUrl": "/problemas-cabelo/excesso-de-quimica.png",
              "order": 8,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 111,
              "name": "Queda",
              "imageUrl": "/problemas-cabelo/queda.png",
              "order": 9,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 112,
              "name": "Não tem nada me preocupando no momento",
              "imageUrl": "/problemas-cabelo/nada-preocupando.png",
              "order": 10,
              "singleOption": false,
              "checked": false
          }
      ]
  },
  {
      "id": 17,
      "name": "Relação com maquiagem",
      "question": "Qual a sua relação com maquiagem?",
      "order": 9,
      "type": 1,
      "hasError": false,
      "errorMessage": null,
      "options": [
          {
              "id": 113,
              "name": "Eu raramente ou nunca utilizo maquiagem.",
              "imageUrl": "/maquiagem/raramente-ou-nunca-utilizo.png",
              "order": 1,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 114,
              "name": "Eu gosto e utilizo maquiagem, mas tendo a usar cores mais neutras e tradicionais",
              "imageUrl": "/maquiagem/gosto-e-utilizo-maquiagem.png",
              "order": 2,
              "singleOption": false,
              "checked": true
          },
          {
              "id": 115,
              "name": "Eu utilizo maquiagem e adoro me arriscar em cores e misturas diferentes e ousadas.",
              "imageUrl": "/maquiagem/utilizo-diferentes-e-ousadas.png",
              "order": 3,
              "singleOption": false,
              "checked": false
          }
      ]
  },
  {
      "id": 18,
      "name": "Maquiagem para os olhos",
      "question": "Quais cores gosta de utilizar em maquiagem para os olhos? Selecione quantas alternativas desejar.",
      "order": 10,
      "type": 2,
      "hasError": false,
      "errorMessage": null,
      "options": [
          {
              "id": 116,
              "name": "Neutras / nudes",
              "imageUrl": "/cor-maquiagem/neutras-nudes.png",
              "order": 1,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 117,
              "name": "Marrons",
              "imageUrl": "/cor-maquiagem/marrons.png",
              "order": 2,
              "singleOption": false,
              "checked": true
          },
          {
              "id": 118,
              "name": "Cinzas e pretas",
              "imageUrl": "/cor-maquiagem/cinzas-e-pretas.png",
              "order": 3,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 119,
              "name": "Coloridas",
              "imageUrl": "/cor-maquiagem/coloridas.png",
              "order": 4,
              "singleOption": false,
              "checked": true
          },
          {
              "id": 120,
              "name": "Não utilizo maquiagem nos olhos",
              "imageUrl": "/cor-maquiagem/nao-utilizo.png",
              "order": 5,
              "singleOption": false,
              "checked": false
          }
      ]
  },
  {
      "id": 19,
      "name": "Maquiagem para os lábios",
      "question": "Quais cores gosta de utilizar em maquiagem para os lábios? Selecione quantas alternativas desejar.",
      "order": 11,
      "type": 2,
      "hasError": false,
      "errorMessage": null,
      "options": [
          {
              "id": 121,
              "name": "Neutras / nudes",
              "imageUrl": "/cor-maquiagem-labios/neutras-nudes.png",
              "order": 1,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 122,
              "name": "Tons de Rosa",
              "imageUrl": "/cor-maquiagem-labios/tons-de-rosa.png",
              "order": 2,
              "singleOption": false,
              "checked": true
          },
          {
              "id": 123,
              "name": "Tons de Vermelho",
              "imageUrl": "/cor-maquiagem-labios/tons-de-vermelho.png",
              "order": 3,
              "singleOption": false,
              "checked": true
          },
          {
              "id": 124,
              "name": "Escuros",
              "imageUrl": "/cor-maquiagem-labios/escuros.png",
              "order": 4,
              "singleOption": false,
              "checked": true
          },
          {
              "id": 125,
              "name": "Exóticos",
              "imageUrl": "/cor-maquiagem-labios/exoticos.png",
              "order": 5,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 126,
              "name": "Não utilizo maquiagem nos lábios",
              "imageUrl": "/cor-maquiagem-labios/nao-utilizo.png",
              "order": 6,
              "singleOption": false,
              "checked": false
          }
      ]
  },
  {
      "id": 20,
      "name": "Cores para utilizar nas unhas",
      "question": "Quais cores gosta de utilizar nas unhas? Selecione quantas alternativas desejar.",
      "order": 12,
      "type": 2,
      "hasError": false,
      "errorMessage": null,
      "options": [
          {
              "id": 127,
              "name": "Nudes",
              "imageUrl": "/cor-de-unhas/nudes.png",
              "order": 1,
              "singleOption": false,
              "checked": true
          },
          {
              "id": 128,
              "name": "Tons de Rosa",
              "imageUrl": "/cor-de-unhas/tons-de-rosa.png",
              "order": 2,
              "singleOption": false,
              "checked": true
          },
          {
              "id": 129,
              "name": "Tons de Vermelho",
              "imageUrl": "/cor-de-unhas/tons-de-vermelho.png",
              "order": 3,
              "singleOption": false,
              "checked": true
          },
          {
              "id": 130,
              "name": "Tons pastéis",
              "imageUrl": "/cor-de-unhas/tons-pasteis.png",
              "order": 4,
              "singleOption": false,
              "checked": true
          },
          {
              "id": 131,
              "name": "Tons Escuros",
              "imageUrl": "/cor-de-unhas/tons-escuros.png",
              "order": 5,
              "singleOption": false,
              "checked": true
          },
          {
              "id": 132,
              "name": "Coloridos",
              "imageUrl": "/cor-de-unhas/coloridos.png",
              "order": 6,
              "singleOption": false,
              "checked": true
          },
          {
              "id": 133,
              "name": "Exóticos (brilho, glitter, metálico)",
              "imageUrl": "/cor-de-unhas/exoticos.png",
              "order": 7,
              "singleOption": false,
              "checked": true
          },
          {
              "id": 134,
              "name": "Não utilizo esmalte",
              "imageUrl": "/cor-de-unhas/nao-utilizo.png",
              "order": 8,
              "singleOption": false,
              "checked": false
          }
      ]
  },
  {
      "id": 21,
      "name": "Tipos de fragrância",
      "question": "Quais tipos de fragrância você gosta? Selecione quantas alternativas desejar.",
      "order": 13,
      "type": 2,
      "hasError": false,
      "errorMessage": null,
      "options": [
          {
              "id": 135,
              "name": "Floral",
              "imageUrl": "/fragrancia/floral.png",
              "order": 1,
              "singleOption": false,
              "checked": true
          },
          {
              "id": 136,
              "name": "Cítrica",
              "imageUrl": "/fragrancia/citrica.png",
              "order": 2,
              "singleOption": false,
              "checked": true
          },
          {
              "id": 137,
              "name": "Amadeirada",
              "imageUrl": "/fragrancia/amadeirada.png",
              "order": 3,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 138,
              "name": "Doce",
              "imageUrl": "/fragrancia/doce.png",
              "order": 4,
              "singleOption": false,
              "checked": true
          },
          {
              "id": 139,
              "name": "Herbal",
              "imageUrl": "/fragrancia/herbal.png",
              "order": 5,
              "singleOption": false,
              "checked": true
          },
          {
              "id": 140,
              "name": "Oriental (especiarias)",
              "imageUrl": "/fragrancia/oriental.png",
              "order": 6,
              "singleOption": false,
              "checked": true
          },
          {
              "id": 141,
              "name": "Não utilizo perfume",
              "imageUrl": "/fragrancia/nao-utilizo.png",
              "order": 7,
              "singleOption": false,
              "checked": false
          }
      ]
  },
  {
      "id": 22,
      "name": "Tratar e prevenir em relação ao corpo",
      "question": "E sobre o seu corpo, o que você gostaria de tratar / previnir? Selecione quantas alternativas desejar.",
      "order": 14,
      "type": 2,
      "hasError": false,
      "errorMessage": null,
      "options": [
          {
              "id": 142,
              "name": "Celulite",
              "imageUrl": "/corpo/celulite.png",
              "order": 1,
              "singleOption": false,
              "checked": true
          },
          {
              "id": 143,
              "name": "Estrias",
              "imageUrl": "/corpo/estrias.png",
              "order": 2,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 144,
              "name": "Gordura Localizada",
              "imageUrl": "/corpo/gordura-localizada.png",
              "order": 3,
              "singleOption": false,
              "checked": true
          },
          {
              "id": 145,
              "name": "Redução de medidas",
              "imageUrl": "/corpo/reducao-de-medidas.png",
              "order": 4,
              "singleOption": false,
              "checked": true
          },
          {
              "id": 146,
              "name": "Ressecamento excessivo",
              "imageUrl": "/corpo/ressecamento-excessivo.png",
              "order": 5,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 147,
              "name": "Flacidez",
              "imageUrl": "/corpo/flacidez.png",
              "order": 6,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 148,
              "name": "Não tenho nada que gostaria de tratar / prevenir no meu corpo",
              "imageUrl": "/corpo/nao-tenho.png",
              "order": 7,
              "singleOption": false,
              "checked": false
          }
      ]
  },
  {
      "id": 23,
      "name": "Mix de produtos favorito",
      "question": "Nós sempre te enviamos um mix de produtos entre cuidado capilar, corporal, facial e maquiagem. Mas se você pudesse apontar seus favoritos, quais categorias você mais gosta de explorar? Selecione quantas alternativas desejar.",
      "order": 15,
      "type": 2,
      "hasError": false,
      "errorMessage": null,
      "options": [
          {
              "id": 149,
              "name": "Corpo e banho",
              "imageUrl": "/mix-produtos/corpo-e-banho.png",
              "order": 1,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 150,
              "name": "Perfumes",
              "imageUrl": "/mix-produtos/perfumes.png",
              "order": 2,
              "singleOption": false,
              "checked": true
          },
          {
              "id": 151,
              "name": "Cuidado facial",
              "imageUrl": "/mix-produtos/cuidado-facial.png",
              "order": 3,
              "singleOption": false,
              "checked": true
          },
          {
              "id": 152,
              "name": "Maquiagem",
              "imageUrl": "/mix-produtos/maquiagem.png",
              "order": 4,
              "singleOption": false,
              "checked": true
          },
          {
              "id": 153,
              "name": "Cuidado do cabelo",
              "imageUrl": "/mix-produtos/cuidado-do-cabelo.png",
              "order": 5,
              "singleOption": false,
              "checked": true
          },
          {
              "id": 154,
              "name": "Cuidado dos pés",
              "imageUrl": "/mix-produtos/cuidado-dos-pes.png",
              "order": 6,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 155,
              "name": "Unhas",
              "imageUrl": "/mix-produtos/unhas.png",
              "order": 7,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 156,
              "name": "Suplementos vitamínicos",
              "imageUrl": "/mix-produtos/suplementos-vitaminicos.png",
              "order": 8,
              "singleOption": false,
              "checked": false
          }
      ]
  },
  {
      "id": 24,
      "name": "Produtos extras de marcas parceiras",
      "question": "Eventualmente enviamos produtos não relacionados à indústria de beleza. Quais dessas categorias te interessa receber? Selecione quantas alternativas desejar.",
      "order": 16,
      "type": 2,
      "hasError": false,
      "errorMessage": null,
      "options": [
          {
              "id": 158,
              "name": "Roupa e vestuário (deveria abrir o tamanho P/M/G)",
              "imageUrl": "/produtos-extras/roupa-e-vestuario.png",
              "order": 2,
              "singleOption": false,
              "checked": true
          },
          {
              "id": 160,
              "name": "Chás",
              "imageUrl": "/produtos-extras/chas.png",
              "order": 4,
              "singleOption": false,
              "checked": true
          },
          {
              "id": 161,
              "name": "Shakes",
              "imageUrl": "/produtos-extras/shakes.png",
              "order": 5,
              "singleOption": false,
              "checked": true
          },
          {
              "id": 162,
              "name": "Produtos de uso íntimo",
              "imageUrl": "/produtos-extras/produtos-de-uso-intimo.png",
              "order": 6,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 163,
              "name": "Sex shop",
              "imageUrl": "/produtos-extras/sex-shop.png",
              "order": 7,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 164,
              "name": "Produtos infantis",
              "imageUrl": "/produtos-extras/produtos-infantis.png",
              "order": 8,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 165,
              "name": "Livros",
              "imageUrl": "/produtos-extras/livros.png",
              "order": 9,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 166,
              "name": "Papelaria",
              "imageUrl": "/produtos-extras/papelaria.png",
              "order": 10,
              "singleOption": false,
              "checked": true
          },
          {
              "id": 167,
              "name": "Decoração",
              "imageUrl": "/produtos-extras/decoracao.png",
              "order": 11,
              "singleOption": false,
              "checked": true
          },
          {
              "id": 168,
              "name": "Produtos Masculinos",
              "imageUrl": "/produtos-extras/produtos-masculinos.png",
              "order": 12,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 159,
              "name": "Snacks e doces",
              "imageUrl": "/produtos-extras/snacks-e-doces.png",
              "order": 13,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 157,
              "name": "itens para cuidado da casa",
              "imageUrl": "/produtos-extras/itens-para-casa.png",
              "order": 13,
              "singleOption": false,
              "checked": false
          }
      ]
  },
  {
      "id": 25,
      "name": "Tamanho do manequim?",
      "question": "Qual o tamanho do seu manequim?",
      "order": 17,
      "type": 1,
      "hasError": false,
      "errorMessage": null,
      "options": [
          {
              "id": 198,
              "name": "PP",
              "imageUrl": "/tamanho-manequim/pp.png",
              "order": 1,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 169,
              "name": "P",
              "imageUrl": "/tamanho-manequim/p.png",
              "order": 2,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 170,
              "name": "M",
              "imageUrl": "/tamanho-manequim/m.png",
              "order": 3,
              "singleOption": false,
              "checked": true
          },
          {
              "id": 171,
              "name": "G",
              "imageUrl": "/tamanho-manequim/g.png",
              "order": 4,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 193,
              "name": "GG",
              "imageUrl": "/tamanho-manequim/gg.png",
              "order": 5,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 194,
              "name": "EG",
              "imageUrl": "/tamanho-manequim/eg.png",
              "order": 6,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 195,
              "name": "G1",
              "imageUrl": "/tamanho-manequim/g1.png",
              "order": 7,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 196,
              "name": "G2",
              "imageUrl": "/tamanho-manequim/g2.png",
              "order": 8,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 197,
              "name": "G3",
              "imageUrl": "/tamanho-manequim/g3.png",
              "order": 9,
              "singleOption": false,
              "checked": false
          }
      ]
  },
  {
      "id": 26,
      "name": "Onde conheceu a Glambox",
      "question": "Onde você conheceu a Glambox?",
      "order": 19,
      "type": 1,
      "hasError": false,
      "errorMessage": null,
      "options": [
          {
              "id": 172,
              "name": "Indicação de Amiga",
              "imageUrl": "/onde-conheceu/indicacao-de-amiga.png",
              "order": 1,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 173,
              "name": "Indicação de Influenciadores Digitais",
              "imageUrl": "/onde-conheceu/indicacao-de-influenciadores-digitais.png",
              "order": 2,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 174,
              "name": "Pesquisa no Google",
              "imageUrl": "/onde-conheceu/pesquisa-no-google.png",
              "order": 3,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 175,
              "name": "No Instagram",
              "imageUrl": "/onde-conheceu/no-instagram.png",
              "order": 4,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 176,
              "name": "No Facebook",
              "imageUrl": "/onde-conheceu/no-facebook.png",
              "order": 5,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 177,
              "name": "No Youtube",
              "imageUrl": "/onde-conheceu/no-youtube.png",
              "order": 6,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 178,
              "name": "Outro",
              "imageUrl": "/onde-conheceu/outro.png",
              "order": 7,
              "singleOption": false,
              "checked": true
          }
      ]
  },
  {
      "id": 27,
      "name": "Gasto mensalmente com produtos de beleza",
      "question": "Quanto você tem gasto mensalmente com produtos de beleza  (sem contabilizar o gasto com clube de assinaturas ou serviços, procedimentos e tratamentos de beleza e estéticos)?",
      "order": 20,
      "type": 1,
      "hasError": false,
      "errorMessage": null,
      "options": [
          {
              "id": 179,
              "name": "Menos de R$10,00",
              "imageUrl": "/gasto-mensal/0-10.png",
              "order": 1,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 180,
              "name": "De R$11,00 a R$30,00",
              "imageUrl": "/gasto-mensal/11-30.png",
              "order": 2,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 181,
              "name": "De R$31,00 a R$50,00",
              "imageUrl": "/gasto-mensal/31-50.png",
              "order": 3,
              "singleOption": false,
              "checked": true
          },
          {
              "id": 182,
              "name": "De R$51,00 a R$100,00",
              "imageUrl": "/gasto-mensal/51-100.png",
              "order": 4,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 183,
              "name": "De R$101,00 a R$200,00",
              "imageUrl": "/gasto-mensal/101-200.png",
              "order": 5,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 184,
              "name": "De R$201,00 a R$400,00",
              "imageUrl": "/gasto-mensal/201-400.png",
              "order": 6,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 185,
              "name": "De R$401,00 a R$600,00",
              "imageUrl": "/gasto-mensal/401-600.png",
              "order": 7,
              "singleOption": false,
              "checked": false
          },
          {
              "id": 186,
              "name": "Mais de R$600,00",
              "imageUrl": "/gasto-mensal/600-mais.png",
              "order": 8,
              "singleOption": false,
              "checked": false
          }
      ]
  }
];

  @Injectable()

  export class AppService {

      public apiUrl = 'http://localhost:5000/beautyprofile';
      public constructor(private http: Http){}
      header : Headers;


    

      /*public getQuestions():Observable<Questions[]>{

        let options = new RequestOptions({
            headers: new Headers({
                'Authorization':  'Bearer Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJzZWN1cmUtYXBpIiwiYXVkIjoic2VjdXJlLWFwcCIsInN1YiI6ImFwYXVsYXNvemFAZ21haWwuY29tfDQ0NDE0NzgiLCJleHAiOjE1OTg5MDMzMDgsInJvbCI6WyJST0xFX1VTRVIiXX0.J-C5kgj2AwzRocVzpWEzQ6ki32BGEkkMULyDS2CfhDhnMnFsNHbdyE3BeavnLM8wPPlfh4v1DgYcerL71qvqPA',
            })
          });
        
        return this.http.get(this.apiUrl, options)
        .map((response:Response) => response.json().result.attributes as Questions[])
      };*/

      public getQuestions(): Array<Questions>{
        return questions;
      }

  }