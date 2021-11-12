// 5 - Criar uma classe que retorne a quantidade de vogais da palavra passada.

class VowelCounter {
  public countVowelsParameter(parameterWord: string): number {
    const vowelNumber = parameterWord.match(/[aeiou]/gi)!.length;

    console.log(`The word ${parameterWord} has ${vowelNumber} vowel(s)`);

    return vowelNumber;
  }

  public countVowelsInput(wordInput: string): void {
    const result = document.querySelector("#result") as HTMLElement;

    const word = wordInput.match(/[aeiou]/gi);

    const vowels = word?.length;
    result.innerHTML = `The word ${wordInput} has ${vowels || 0} vowel(s)`;
  }
}

const vowelCounter = new VowelCounter();

//   a) Dar um exemplo de uso com uma palavra recebida via parâmetro da função.
vowelCounter.countVowelsParameter("example");

const formWord = document.querySelector("#inputWord") as HTMLInputElement;
const form = document.querySelector("#form") as HTMLFormElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  //   b) Dar um exemplo de uso com uma palavra recebida via input no formulário.
  vowelCounter.countVowelsInput(formWord.value);
});
