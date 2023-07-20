import { Products, taxCalculation } from './06-function-destructuring';

const shoppingCart: Products[] = [
  { description: 'Nokia', price: 120 },
  { description: 'Iphone', price: 450 },
];

const tax = 0.15;
const [totalPrice, totalTax] = taxCalculation({
  products: shoppingCart,
  tax: tax,
});

console.log('Total: ', totalPrice);
console.log('Taxes: ', totalTax);
