import bcrypt from 'bcryptjs';
import postgres from 'postgres';
import { users, customers, products } from '../lib/placeholder-data';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function seedUsers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      username TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      role TEXT NOT NULL
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return sql`
        INSERT INTO users (id, name, username, password, role)
        VALUES (${user.id}, ${user.name}, ${user.username}, ${hashedPassword}, ${user.role})
        ON CONFLICT (id) DO NOTHING;
      `;
    })
  );

  return insertedUsers;
}

async function seedCustomers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS customers (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      password TEXT NOT NULL,
      role TEXT NOT NULL
    );
  `;

  const insertedCustomers = await Promise.all(
    customers.map(async (customer) => {
      const hashedPassword = await bcrypt.hash(customer.password, 10);
      return sql`
        INSERT INTO customers (id, name, email, password, role)
        VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${hashedPassword}, ${customer.role})
        ON CONFLICT (id) DO NOTHING;
      `;
    })
  );

  return insertedCustomers;
}

async function seedProducts() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS products (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      price INT NOT NULL,
      image VARCHAR(255) NOT NULL,
      description TEXT NOT NULL
    );
  `;

  const foodProducts = products.food.map((product) => ({ ...product }));
  const drinkProducts = products.drink.map((product) => ({ ...product }));
  const allProducts = [...foodProducts, ...drinkProducts];

  const insertedProducts = await Promise.all(
    allProducts.map((product) =>
      sql`
        INSERT INTO products (id, name, price, image, description)
        VALUES (${product.id}, ${product.name}, ${product.price}, ${product.image}, ${product.description})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedProducts;
}

export async function GET() {
  try {
    const result = await sql.begin(async (sql) => {
      await seedUsers();
      await seedCustomers();
      await seedProducts();
    });

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    console.error(error);
    return Response.json({ error }, { status: 500 });
  }
}
