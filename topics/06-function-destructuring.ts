export interface Products {
  description: string;
  price: number;
}

const phone: Products = {
  description: 'Nokia 360',
  price: 120.5,
};

const tablet: Products = {
  description: 'IPad Air',
  price: 215.5,
};

export interface TaxCalculationOptions {
  tax: number;
  products: Products[];
}

export function taxCalculation(options: TaxCalculationOptions): number[] {
  let total = 0;

  options.products.forEach((product) => {
    total += product.price;
  });

  return [total, total * options.tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const resultTax = taxCalculation({
  products: shoppingCart,
  tax: tax,
});

// console.log('Total: ', resultTax[0]);
// console.log('Tax: ', resultTax[1]);

/* Tarea de aplicar destructuracion */

const [totalPrice, TotalTax] = taxCalculation({
  products: shoppingCart,
  tax: tax,
});

// console.log('Total Des:', totalPrice);
// console.log('Tax Des:', TotalTax);
// export {};
