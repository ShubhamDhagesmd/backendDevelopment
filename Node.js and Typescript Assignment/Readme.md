
## Getting Started

### Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.

### Running the Server

- Run the server using `node app.js`.
- Ensure the environment variables are properly set or use the `.env.example` as a guide to create your `.env` file.

## API Endpoints

### `GET /api/products`

- Retrieve a list of products.

### `GET /api/products/:id`

- Retrieve details of a specific product by ID.

### `POST /api/products`

- Create a new product.

### `PUT /api/products/:id`

- Update details of a specific product by ID.

### `DELETE /api/products/:id`

- Delete a product by ID.

## In-memory Data Store

An in-memory data store, such as an array, is used to store product data. Modify the `productModel.ts` to include methods for managing product data within this store.

## Middleware Implementation (Task 5)

-A middleware function `requestLogger.ts` has been created to log the timestamp, HTTP method, and requested URL for every incoming request to the API. You can find this middleware in the `middleware` directory.
- Run the Server using `node app.js`.

## Unit Testing (Task 6)

Unit tests for at least two API endpoints are available in the `tests` directory. These tests cover various scenarios, including success cases and error handling. You can expand the test coverage by adding more test cases for different scenarios.

### Running Tests
- First install `npm install --save-dev jest`
- Execute tests using a testing framework (e.g., Jest) with `npx jest`.

## Contributions

Contributions to improve the API functionalities, add new endpoints, enhance middleware, or improve test coverage are welcome via pull requests. Please follow standard contribution guidelines.

---

Feel free to explore the codebase, modify functionalities, and contribute improvements or additional features! If you have any questions or need assistance, don't hesitate to reach out.
