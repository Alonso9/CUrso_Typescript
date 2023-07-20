export interface Passengers {
  name: string;
  childrens?: string[];
}

const passenger1: Passengers = {
  name: 'Alonso',
  childrens: ['Boy1', 'Boy2', 'Girl1'],
};

const passenger2: Passengers = {
  name: 'fernando',
};

// En caso de que el tamaño sea Undefined se ejecuta el OR
const printChildren = (passenger: Passengers) => {
  const howManyChildren = passenger.childrens?.length || 0;
  console.log(howManyChildren);
};

printChildren(passenger1);
printChildren(passenger2);
