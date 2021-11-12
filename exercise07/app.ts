// 7 - Crie uma classe que receba uma lista (númerica ou não) e retorne outra contendo:
//   a) O maior valor;
//   b) O menor valor;
//   c) O valor médio.
// Demonstre essa classe com o paradigma funcional e imperativo

class ArrayManipulator {
  private _list: number[];

  constructor(list: number[]) {
    this._list = list;
  }

  // Imperativo
  public listFilterImperative(): number[] | void {
    if (!this._list.some(isNaN)) {
      let largest = this._list[0];
      let lowest = this._list[0];
      let average = 0;
      let counter = 0;

      for (let i = 0; i < this._list.length; i++) {
        if (largest < this._list[i]) {
          largest = this._list[i];
        }

        if (lowest > this._list[i]) {
          lowest = this._list[i];
        }

        counter += this._list[i];
      }

      average = counter / this._list.length;
      const newList = [largest, lowest, average];

      console.log(newList);
      return newList;
    } else {
      console.log("List must contain numbers only");
    }
  }

  // Funcional

  public listFilterFunctional(): number[] | void {
    if (!this._list.some(isNaN)) {
      const largest = this._list.reduce(function (a, b) {
        return Math.max(a, b);
      });
      const lowest = this._list.reduce(function (a, b) {
        return Math.min(a, b);
      });
      const average = this._list.reduce((a, b) => a + b) / this._list.length;

      const newList = [largest, lowest, average];

      console.log(newList);
      return newList;
    } else {
      console.log("List must contain numbers only");
    }
  }
}

const listOfNumbers: number[] = [1, 2, 3, 4, 5, 6];

const arrayManipulator = new ArrayManipulator(listOfNumbers);

// Demonstração de funcionamento

// Imperativo

console.log("listFilterImperative");
arrayManipulator.listFilterImperative();
console.log("_______________________");

// Funcional
console.log("listFilterFunctional");
arrayManipulator.listFilterFunctional();
