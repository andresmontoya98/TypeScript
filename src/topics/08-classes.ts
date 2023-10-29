export class Person {
  //   public name: string;
  //   private address: string;

  constructor(
    public firstName: string,
    public lastName: string,
    private address: string = "No address"
  ) {}
}

export class Hero {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person
  ) {}
}

const tony = new Person("tony", "New York");
const ironman = new Hero("Iroman", 45, "tony", tony);

console.log(ironman);
