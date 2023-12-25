"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const body_parser_1 = require("body-parser");
const productsData_1 = require("./productsData");
const bodyParser = require('body-parser'); // Import body-parser

app.use(bodyParser.json()); // Use bodyParser for JSON parsing
// app.use(body_parser_1.default.json());

// Retrieve all products
app.get('/api/products', (req, res) => {
    const products = productsData_1.getProducts();
    res.json(products);
});

// Retrieve a specific product by ID
app.get('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = productsData_1.getProductById(productId);
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
});

// Create a new product
app.post('/api/products', (req, res) => {
    const { name, price } = req.body;
    if (!name || !price) {
        return res.status(400).json({ message: 'Name and price are required' });
    }
    const newProduct = productsData_1.addProduct({ name, price });
    res.status(201).json(newProduct);
});

// Update details of a specific product by ID
app.put('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const { name, price } = req.body;
    const updatedProduct = productsData_1.updateProduct(productId, { name, price });
    if (!updatedProduct) {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.json(updatedProduct);
});

// Delete a product by ID
app.delete('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const deleted = productsData_1.deleteProduct(productId);
    if (!deleted) {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
