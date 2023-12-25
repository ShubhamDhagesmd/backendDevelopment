"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.addProduct = exports.getProductById = exports.getProducts = void 0;
var products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    // Add more initial products here if needed
];
var nextId = products.length + 1; // Track the next available ID
var getProducts = function () {
    return products;
};
exports.getProducts = getProducts;
var getProductById = function (id) {
    return products.find(function (p) { return p.id === id; });
};
exports.getProductById = getProductById;
var addProduct = function (newProduct) {
    var product = __assign({ id: nextId++ }, newProduct);
    products.push(product);
    return product;
};
exports.addProduct = addProduct;
var updateProduct = function (id, updatedProduct) {
    var index = products.findIndex(function (p) { return p.id === id; });
    if (index !== -1) {
        products[index] = __assign(__assign({}, products[index]), updatedProduct);
        return products[index];
    }
    return undefined;
};
exports.updateProduct = updateProduct;
var deleteProduct = function (id) {
    var initialLength = products.length;
    products = products.filter(function (p) { return p.id !== id; });
    return products.length !== initialLength;
};
exports.deleteProduct = deleteProduct;
