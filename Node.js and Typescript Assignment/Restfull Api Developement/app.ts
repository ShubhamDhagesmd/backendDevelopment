// app.ts
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { getProducts, getProductById, addProduct, updateProduct, deleteProduct } from './productsData';

// import express from 'express';
const app = express();
app.use(bodyParser.json());

// Retrieve all products
app.get('/api/products', (req: Request, res: Response) => {
  const products = getProducts();
  res.json(products);
});

// Retrieve a specific product by ID
app.get('/api/products/:id', (req: Request, res: Response) => {
  const productId = parseInt(req.params.id);
  const product = getProductById(productId);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json(product);
});

// Create a new product
app.post('/api/products', (req: Request, res: Response) => {
  const { name, price } = req.body;
  if (!name || !price) {
    return res.status(400).json({ message: 'Name and price are required' });
  }

  const newProduct = addProduct({ name, price });
  res.status(201).json(newProduct);
});

// Update details of a specific product by ID
app.put('/api/products/:id', (req: Request, res: Response) => {
  const productId = parseInt(req.params.id);
  const { name, price } = req.body;
  const updatedProduct = updateProduct(productId, { name, price });

  if (!updatedProduct) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json(updatedProduct);
});

// Delete a product by ID
app.delete('/api/products/:id', (req: Request, res: Response) => {
  const productId = parseInt(req.params.id);
  const deleted = deleteProduct(productId);

  if (!deleted) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json({ message: 'Product deleted successfully' });
});

app.post('/api/products', (req: Request, res: Response) => {
    const { name, price } = req.body;
    if (!name || !price) {
      return res.status(400).json({ message: 'Name and price are required' });
    }
  
    const newProduct = addProduct({ name, price });
    res.status(201).json(newProduct);
  });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
