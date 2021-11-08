"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonFactory = void 0;
var Person_1 = require("./Person");
var PersonFactory = /** @class */ (function () {
    function PersonFactory() {
    }
    PersonFactory.prototype.createPerson = function (list) {
        if (list.length > 0) {
            var listOfPeople_1 = [];
            list.forEach(function (element) {
                listOfPeople_1.push(new Person_1.Person(element.id, element.name, element.bio));
            });
            console.log("a) Após a leitura, crie uma Factory que, a partir da lista do exercício 6, dado um array, devolva o nome e a bio da pessoa.");
            listOfPeople_1.forEach(function (element) {
                console.log(element.name);
                console.log(element.bio);
                console.log("_______________________________________");
            });
            return listOfPeople_1;
        }
        else {
            console.log("The list is empty!");
        }
    };
    return PersonFactory;
}());
exports.PersonFactory = PersonFactory;
