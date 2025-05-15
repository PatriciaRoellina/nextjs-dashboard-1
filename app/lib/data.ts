import {
  CustomerField,
  FormattedCustomersTable,
  products,
} from './definitions';
import { formatCurrency } from './utils';
import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

// Ambil semua customer (id & nama)
export async function fetchCustomers() {
  try {
    console.log('Fetching customers...');
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const customers = await sql<CustomerField[]>`
      SELECT id, name
      FROM customers
      ORDER BY name ASC
    `;

    return customers;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch all customers.');
  }
}

// Ambil semua customer dengan filter nama/email + total invoice dummy
export async function fetchFilteredCustomers(query: string) {
  try {
    console.log('Fetching filtered customers...');
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const data = await sql<FormattedCustomersTable[]>`
      SELECT
        customers.id,
        customers.name,
        customers.email,
        customers.image_url
      FROM customers
      WHERE
        customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`}
      ORDER BY customers.name ASC
    `;

    const customers = data.map((customer) => ({
      ...customer,
      total_invoices: 0, // dummy karena gak ada tabel invoices
      total_pending: formatCurrency(0),
      total_paid: formatCurrency(0),
    }));

    return customers;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch customer table.');
  }
}

// Ambil semua produk
export async function fetchProducts() {
  try {
    console.log('Fetching products...');
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const products = await sql<products[]>`
      SELECT id, name, price, image, description, category
      FROM products
      ORDER BY name ASC
    `;

    return products;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch products.');
  }
}

// Dashboard Card Summary
export async function fetchCardData() {
  try {
    console.log('Fetching card data...');
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const customerCountPromise = sql`SELECT COUNT(*) AS count FROM customers`;
    const productCountPromise = sql`SELECT COUNT(*) AS count FROM products`;

    const [customerCount, productCount] = await Promise.all([
      customerCountPromise,
      productCountPromise,
    ]);

    return {
      numberOfCustomers: Number(customerCount[0].count ?? '0'),
      totalMenu: Number(productCount[0].count ?? '0'),
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}
