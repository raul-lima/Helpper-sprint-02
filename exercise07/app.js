"use strict";
// 7 - Crie uma classe que receba uma lista (númerica ou não) e retorne outra contendo:
//   a) O maior valor;
//   b) O menor valor;
//   c) O valor médio.
// Demonstre essa classe com o paradigma funcional e imperativo
var ArrayManipulator = /** @class */ (function () {
    function ArrayManipulator(list) {
        this._list = list;
    }
    // Imperativo
    ArrayManipulator.prototype.listFilterImperative = function () {
        if (!this._list.some(isNaN)) {
            var largest = this._list[0];
            var lowest = this._list[0];
            var average = 0;
            var counter = 0;
            for (var i = 0; i < this._list.length; i++) {
                if (largest < this._list[i]) {
                    largest = this._list[i];
                }
                if (lowest > this._list[i]) {
                    lowest = this._list[i];
                }
                counter += this._list[i];
            }
            average = counter / this._list.length;
            var newList = [largest, lowest, average];
            console.log(newList);
            return newList;
        }
        else {
            console.log("List must contain numbers only");
        }
    };
    // Funcional
    ArrayManipulator.prototype.listFilterFunctional = function () {
        if (!this._list.some(isNaN)) {
            var largest = this._list.reduce(function (a, b) {
                return Math.max(a, b);
            });
            var lowest = this._list.reduce(function (a, b) {
                return Math.min(a, b);
            });
            var average = this._list.reduce(function (a, b) { return a + b; }) / this._list.length;
            var newList = [largest, lowest, average];
            console.log(newList);
            return newList;
        }
        else {
            console.log("List must contain numbers only");
        }
    };
    return ArrayManipulator;
}());
var listOfNumbers = [1, 2, 3, 4, 5, 6];
var arrayManipulator = new ArrayManipulator(listOfNumbers);
// Demonstração de funcionamento
// Imperativo
console.log("listFilterImperative");
arrayManipulator.listFilterImperative();
console.log("_______________________");
// Funcional
console.log("listFilterFunctional");
arrayManipulator.listFilterFunctional();
