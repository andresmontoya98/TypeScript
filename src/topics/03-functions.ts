// const addNumbers = (a: number, b: number) => {
//   let suma: number = a + b;
//   return suma;
// };

// console.log(addNumbers(2, 4));

interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
  character.hp += amount;
};

const strider: Character = {
  name: "Strider",
  hp: 50,
  showHp() {
    console.log(`Puntos de vida ${this.hp}`);
  },
};

healCharacter(strider, 30);

strider.showHp();

export {};
