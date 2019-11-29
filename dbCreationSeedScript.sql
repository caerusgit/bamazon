DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("product1", "department1", 1.11, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("product2", "department2", 2.22, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("product3", "department3", 3.33, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("product4", "department3", 4.44, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("product5", "department1", 5.55, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("product6", "department2", 6.66, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("product7", "department2", 7.77, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("product8", "department3", 8.88, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("product9", "department1", 9.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("product10", "department1", 10.00, 100);

-- ### Alternative way to insert more than one row
-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);
