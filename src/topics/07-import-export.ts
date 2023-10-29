import { Product, taxCalculation } from "./06-function-destructuring";

const shoppingCart: Product[] = [
  {
    description: "Samsung",
    price: 350.0,
  },
  {
    description: "Iphone",
    price: 500.0,
  },
];

const [total, tax] = taxCalculation({
  tax: 0.15,
  products: shoppingCart,
});

console.log("Total: " + total + " tax: " + tax);
