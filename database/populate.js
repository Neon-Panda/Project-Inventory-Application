import pg from "pg";
const { Client } = pg;
import "dotenv/config";

const SQL = `
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock INT NOT NULL,
  category_id INT NOT NULL,
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

INSERT INTO categories (name) VALUES
('Electronics'),
('Food'),
('Books');

INSERT INTO items (name, price, stock, category_id) VALUES
('Laptop', 600.00, 20, 1),
('Phone', 800.00, 5, 1),
('Carrots', 1.00, 50, 2),
('Potatoes', 1.50, 30, 2),
('To Kill A Mockingbird', 35.00, 5, 3);

`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.poolInformation,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("Done");
}

main();
