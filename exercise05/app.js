"use strict";
// 5 - Criar uma classe que retorne a quantidade de vogais da palavra passada.
var VowelCounter = /** @class */ (function () {
    function VowelCounter() {
    }
    VowelCounter.prototype.countVowelsParameter = function (parameterWord) {
        var vowelNumber = parameterWord.match(/[aeiou]/gi).length;
        console.log("The word " + parameterWord + " has " + vowelNumber + " vowel(s)");
        return vowelNumber;
    };
    VowelCounter.prototype.countVowelsInput = function (wordInput) {
        var result = document.querySelector("#result");
        var word = wordInput.match(/[aeiou]/gi);
        var vowels = word === null || word === void 0 ? void 0 : word.length;
        result.innerHTML = "The word " + wordInput + " has " + (vowels || 0) + " vowel(s)";
    };
    return VowelCounter;
}());
var vowelCounter = new VowelCounter();
//   a) Dar um exemplo de uso com uma palavra recebida via parâmetro da função.
vowelCounter.countVowelsParameter("example");
var formWord = document.querySelector("#inputWord");
var form = document.querySelector("#form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    //   b) Dar um exemplo de uso com uma palavra recebida via input no formulário.
    vowelCounter.countVowelsInput(formWord.value);
});
