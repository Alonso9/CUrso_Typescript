// Para no establecer un tipo de dato especifico en nuestro TS usamos los genericos, ese generico hace que pueda recibir diferentes tipos de datos y asi evitar el uso de "any" que es una mala practica en TS
export function whatsMyType<T>(argument: T): T {
  return argument;
}

const amIString = whatsMyType<string>('Hi world');
const amINumber = whatsMyType<number>(123);
const amIArray = whatsMyType<number[]>([1, 2, 3, 4]);

console.log(amIString.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));
