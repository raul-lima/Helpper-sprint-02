"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PersonFactory_1 = require("./PersonFactory");
var list = [
    {
        id: 1,
        name: "Ada Lovelace",
        bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina",
    },
    {
        id: 2,
        name: "Alan Turing",
        bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia",
    },
    {
        id: 3,
        name: "Nikola Tesla",
        bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.",
    },
    {
        id: 4,
        name: "Nicolau Copérnico",
        bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar.",
    },
];
// a) Após a leitura, crie uma Factory que, a partir da lista do exercício 6, dado um array, devolva o nome e a bio da pessoa.
var personFactory = new PersonFactory_1.PersonFactory();
var personList = personFactory.createPerson(list);
console.log(" b) Crie um código que responda quem criou a linguagem de programação Ada, essa resposta precisa estar como propriedade do objeto da pessoa relacionada:");
console.log(personList[0].bio);
