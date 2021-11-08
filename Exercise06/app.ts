// 6 - Dado o array:
 
// let lista = new Array<Object> = [
//      {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
//      {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
//      {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
//      {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}];

//  a) Crie uma classe que retorne a bio do id passado
//  b) Crie uma classe que retorne o name do id passado
//  c) Crie uma classe que apague um item da lista a partir de um id passado
//  d) Crie uma classe que altere a bio ou o name a partir de um id passado
//  e) Demonstre todos os métodos com o paradigma funcional e com o imperativo
//  Atenção: A escolha de fazer 1 classe ou N classes é de cada pessoa

class ArrayManipulation {
  private _list : Person[]

  constructor(list: Person[]){
    this._list = list
  }

  //  a) Crie uma classe que retorne a bio do id passado

  // Imperativo
  public getBioByIdImperative(id: number) : string | void {
    this._list.forEach((person) => {
      if (person["id"] == id) {
        console.log(person["bio"]);
  
        return person["bio"];
      }
    });
  }
  
  // Funcional
  public getBioByIdFunctional(id : number) : string | void {

    const bio = this._list.find((person) => person.id == id)?.bio;
    console.log(bio);
    return bio;
  }

//  b) Crie uma classe que retorne o name do id passado

  // Imperativo
public getNameByIdImperative(id: number) : string | void {

  this._list.forEach((person) => {
    if (person["id"] == id) {
      console.log(person["name"]);

      return person["name"];
    }
  });
}

// Funcional
public getNameByIdFunctional(id: number) : string | void {
  const name = this._list.find((person) => person.id == id)?.name;
  console.log(name);
  return name;
}

//  c) Crie uma classe que apague um item da lista a partir de um id passado

// Imperativo
public deleteByIdImperative(id: number) : void {

  for (let i = 0; i < this._list.length; i++) {
    if (this._list[i].id == id) {
      this._list.splice(i, 1);
    }
  }
  console.log(this._list);

}

// Funcional
public deleteByIdFunctional(id: number) : void {

  const index = this._list.findIndex(function (person) {
    return person.id == id;
  })

  // The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test. 
  if (index !== -1) {
    this._list.splice(index, 1);
  }

  console.log(this._list);


}

//  d) Crie uma classe que altere a bio ou o name a partir de um id passado

// Imperativo
public updateBioOrNameByIdImperative(id: number, propertyToUpdate: string, newText: string) : void {

  for (let i = 0; i < this._list.length; i++) {
    if (this._list[i].id == id) {
      if (propertyToUpdate == "bio") {
        this._list[i].bio = newText;
      } else if (propertyToUpdate == "name") {
        this._list[i].name = newText;
      }
    }
  }

  console.log(this._list);

}

// Funcional
public updateBioOrNameByIdFunctional(id: number, propertyToUpdate: string, newText: string) : void {
  const index = this._list.findIndex((person => person.id == id));

  if (index !== -1) {

    if (propertyToUpdate == "bio") {

      this._list[index].bio = newText;

    } else if (propertyToUpdate == "name") {
      this._list[index].name = newText;
    }

  }
  console.log(this._list);
}


}

interface Person {
  id: number;
  name: string;
  bio: string;
}

const list : Person[] = [
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

const arrayManipulation = new ArrayManipulation(list)

// Demonstrações de funcionamento

  //  a) Crie uma classe que retorne a bio do id passado

// Imperativo

console.log("getBioByIdImperative");
arrayManipulation.getBioByIdImperative(1);
console.log("_______________________________________")

// Funcional


console.log("getBioByIdFunctional");
arrayManipulation.getBioByIdFunctional(2);
console.log("_______________________________________")

// b) Crie uma classe que retorne o name do id passado

// Imperativo

console.log("getNameByIdImperative");
arrayManipulation.getNameByIdImperative(1);
console.log("_______________________________________")

// Funcional

console.log("getNameByIdFunctional");
arrayManipulation.getNameByIdFunctional(2);
console.log("_______________________________________")

// c) Crie uma classe que apague um item da lista a partir de um id passado

// Imperativo


console.log("deleteByIdImperative");
arrayManipulation.deleteByIdImperative(3);
console.log("_______________________________________")

// Funcional

console.log("deteleByIdFunctional");
arrayManipulation.deleteByIdFunctional(1);
console.log("_______________________________________")


// d) Crie uma função que altere a bio ou o name a partir de um id passado


// Imperativo

console.log("updateBioOrNameByIdImperative");
console.log("Update name")
arrayManipulation.updateBioOrNameByIdImperative(2, "name", "Fulano");
console.log("Update bio")
arrayManipulation.updateBioOrNameByIdImperative(2, "bio", "Dev");
console.log("_______________________________________")

// Funcional

console.log("updateBioOrNameByIdFunctional");
console.log("Update name")
arrayManipulation.updateBioOrNameByIdFunctional( 4, "name", "Raul");
console.log("Update bio")
arrayManipulation.updateBioOrNameByIdFunctional( 4, "bio", "Dev");
console.log("_______________________________________")

