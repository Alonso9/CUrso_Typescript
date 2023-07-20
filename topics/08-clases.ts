export class Person {
  //   public name: string;
  //   public address: string;

  constructor(public name: string, public address: string) {
    this.name;
    this.address;
  }
}

// Como hereo es una extension de Person, para usar el Contructor de Person usamos la palabra reservada hero
// export class Hero extends Person {
//   constructor(
//     public alterEgo: string,
//     public age: number,
//     public realName: string
//   ) {
//     super(realName, 'New York');
//   }
// }

export class Hero {
  //   public person: Person;
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person
  ) {
    // this.person = new Person(realName);
  }
}
const person = new Person('Roger', 'Chicago');
const IronMan = new Hero('IronMan', 45, 'Tony Start', person);

console.log(IronMan);
