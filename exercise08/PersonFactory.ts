import { IPerson } from "./IPerson";
import { Person } from "./Person";

export class PersonFactory {
  public createPerson(list: IPerson[]): Person[] | void {
    if (list.length > 0) {
      let listOfPeople: Person[] = [];
      list.forEach((element) => {
        listOfPeople.push(new Person(element.id, element.name, element.bio));
      });

      console.log(
        "a) Após a leitura, crie uma Factory que, a partir da lista do exercício 6, dado um array, devolva o nome e a bio da pessoa."
      );
      listOfPeople.forEach((element) => {
        console.log(element.name);
        console.log(element.bio);
        console.log("_______________________________________");
      });

      return listOfPeople;
    } else {
      console.log("The list is empty!");
    }
  }
}
