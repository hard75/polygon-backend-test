# Tech Store

This project is an shopping platform where users can view products and add them to their shopping cart.

## Requirements

Make sure you have the following installed on your machine:

- Node.js
- NPM
- Mysql

# Configuring MySQL in Sequelize

To configure MySQL in Sequelize for your Node.js application, follow these steps:

1. Open the `src/config/config.json` file in your project.

2. Locate the `development` section within the file. This section contains the configuration for the development environment.

3. Update the `username`, `password`, `database`, `host`, and `dialect` fields to match your MySQL database credentials:

```json
   "development": {
     "username": "your_mysql_username",
     "password": "your_mysql_password",
     "database": "your_database_name",
     "host": "127.0.0.1",
     "dialect": "mysql"
   }
```

## Project Setup

1. **Clone the Repository:**

```bash
   git clone https://github.com/hard75/polygon-backend-test
   
   cd polygon-backend-test
   npm install
```
2. **Fill database:**
```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

3. **Run project:**
```bash
   npm run dev 
   //or
   npm start
```

# API Usage

## Base URL

The base URL for the API is `http://your-api-domain.com`.

## Endpoints

## Products

### Get List of Products

- **Endpoint:** `/api/products`
- **Method:** `GET`
- **Description:** Retrieve a list of all products with your category.
- **Example Request:**
  ```http
  GET http://localhost:PORT/api/users

### Get Product by Id

- **Endpoint:** `/api/product/:id`
- **Method:** `GET`
- **Description:** Retrieve a product by Id.
- **Example Request:**
  ```http
  GET http://localhost:PORT/api/product/:id

### Get list of products by category id

- **Endpoint:** `/products/category/:categoryId`
- **Method:** `GET`
- **Description:** Retrieve products by category Id.
- **Example Request:**
  ```http
  GET http://localhost:PORT/api/products/category/:categoryId

### Search product by name

- **Endpoint:** `/products/:name`
- **Method:** `GET`
- **Description:** Retrieve product by name.
- **Example Request:**
  ```http
  GET http://localhost:PORT/api/products/:name

## Categories

### Get list categroies

- **Endpoint:** `/categories`
- **Method:** `GET`
- **Description:** Retrieve categories.
- **Example Request:**
  ```http
  GET http://localhost:PORT/api/categories

## Cart Item

### Get list car items

- **Endpoint:** `/car-items`
- **Method:** `GET`
- **Description:** Retrieve car items.
- **Example Request:**
  ```http
  GET http://localhost:PORT/api/car-items


### Get list car items

- **Endpoint:** `/car-items-length`
- **Method:** `GET`
- **Description:** Retrieve length.
- **Example Request:**
  ```http
  GET http://localhost:PORT/api/car-items-length

### Add cart item

- **Endpoint:** `/add-car-item`
- **Method:** `POST`
- **Description:** Add cart item.
- **Request Body**
```json
{
    "productId": 1,
    "quantity": 1
}
```
- **Example Request:**
  ```http
  POST http://localhost:PORT/api/add-car-item


### Remove cart item

- **Endpoint:** `/car-items-length`
- **Method:** `DELETE`
- **Description:** Delete cart item by id.
- **Example Request:**
  ```http
  DELETE http://localhost:PORT/api/remove-car-item/:id
