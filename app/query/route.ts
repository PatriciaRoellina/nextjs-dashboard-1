import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function listData() {
  // Ambil data users
  const usersData = await sql`
    SELECT id, name, username, role FROM users;
  `;

  // Ambil data customers
  const customersData = await sql`
    SELECT id, name, email, role FROM customers;
  `;

  // Ambil data products
  const productsData = await sql`
    SELECT id, name, price, image, description FROM products;
  `;

  return { users: usersData, customers: customersData, products: productsData };
}

export async function GET() {
  try {
    const result = await listData();
    return Response.json(result);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
