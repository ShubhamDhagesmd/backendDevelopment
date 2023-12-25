// productsData.ts
import { Product } from './product';

let products: Product[] = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  // Add more initial products here if needed
];

let nextId = products.length + 1; // Track the next available ID

export const getProducts = (): Product[] => {
  return products;
};

export const getProductById = (id: number): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const addProduct = (newProduct: Omit<Product, 'id'>): Product => {
  const product: Product = {
    id: nextId++,
    ...newProduct,
  };
  products.push(product);
  return product;
};

export const updateProduct = (id: number, updatedProduct: Partial<Product>): Product | undefined => {
  const index = products.findIndex((p) => p.id === id);
  if (index !== -1) {
    products[index] = { ...products[index], ...updatedProduct };
    return products[index];
  }
  return undefined;
};

export const deleteProduct = (id: number): boolean => {
  const initialLength = products.length;
  products = products.filter((p) => p.id !== id);
  return products.length !== initialLength;
};
