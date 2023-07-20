// Los decoradores son funciones

function classDecorator(
    constructor: any;
) {
    return class extends constructor {
        newProperty = 'New property'
        hello = 'Alonso'
    } 
}

@classDecorator
export class superClass {
  public myProperty: string = '123';

  print() {
    console.log('Hi world');
  }
}

console.log(superClass);
const myClass = new superClass();
