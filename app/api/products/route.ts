// import { NextResponse } from 'next/server';
// import { Pool } from 'pg';

// // Inisialisasi pool dengan timeout yang lebih panjang
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
//   connectionTimeoutMillis: 15000, // Timeout 15 detik
//   idleTimeoutMillis: 30000, // Idle timeout 30 detik
// });

// export async function GET() {
//   try {
//     console.log('DATABASE_URL:', process.env.DATABASE_URL); // Debugging
//     console.log('Attempting to connect to database...');
//     const client = await pool.connect();
//     console.log('Connected to database!');
//     const result = await client.query('SELECT * FROM "Product"'); // Gunakan "Product" karena case-sensitive
//     client.release();
//     return NextResponse.json(result.rows, { status: 200 });
//   } catch (error) {
//     console.error('Error fetching products:', error);
//     return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
//   }
// }

// export async function POST(request) {
//   try {
//     const { token } = await request.json();
//     if (!token) {
//       return NextResponse.json({ error: 'Token is required' }, { status: 400 });
//     }
//     console.log('Attempting to connect to database for logout...');
//     const client = await pool.connect();
//     console.log('Connected to database for logout!');
//     const sessionResult = await client.query(
//       'SELECT * FROM sessions WHERE token = $1 AND expires_at > NOW()',
//       [token]
//     );
//     if (sessionResult.rows.length === 0) {
//       client.release();
//       return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
//     }
//     await client.query('DELETE FROM sessions WHERE token = $1', [token]);
//     client.release();
//     return NextResponse.json({ message: 'Logged out successfully' }, { status: 200 });
//   } catch (error) {
//     console.error('Error during logout:', error);
//     return NextResponse.json({ error: 'Failed to log out' }, { status: 500 });
//   }
// }

// import { NextResponse } from 'next/server';
// import { Pool } from 'pg';

// // Inisialisasi pool dengan timeout yang lebih panjang
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
//   connectionTimeoutMillis: 15000, // Timeout 15 detik
//   idleTimeoutMillis: 30000, // Idle timeout 30 detik
// });

// // Konfigurasi pemetaan nama produk ke id kategori (dibaca dari database nanti)
// const productCategoryMapping = [
//   { name: 'Spiderweb Quesadilla', categoryId: 120 },
//   { name: 'Bloody Eyeball Bites', categoryId: 120 },
//   { name: 'Spooky Ghost Pizza', categoryId: 120 },
//   { name: 'Witch’s Fingers', categoryId: 120 },
//   { name: 'Buried Alive Bites', categoryId: 120 },
//   { name: 'Bloody Vision', categoryId: 121 },
//   { name: 'Bloody Elixir', categoryId: 121 },
//   { name: 'Graveyard Pudding', categoryId: 121 },
//   { name: 'Haunted Ghost Shake', categoryId: 121 },
//   { name: 'Vampire Blood Bags', categoryId: 121 },
// ];

// export async function GET() {
//   try {
//     console.log('DATABASE_URL:', process.env.DATABASE_URL); // Debugging
//     console.log('Attempting to connect to database...');
//     const client = await pool.connect();
//     console.log('Connected to database!');

//     // Ambil semua kategori dari tabel "Category"
//     const categoryResult = await client.query('SELECT id, name FROM "Category"');
//     const categories = categoryResult.rows;
//     console.log('Categories from database:', categories);

//     // Ambil semua produk dari tabel "Product"
//     const productResult = await client.query('SELECT id, name, price, image, description FROM "Product"');
//     const products = productResult.rows;

//     // Cocokkan produk dengan kategori berdasarkan nama
//     const mappedProducts = products.map(product => {
//       const mapping = productCategoryMapping.find(p => p.name === product.name);
//       if (mapping) {
//         const category = categories.find(c => c.id === mapping.categoryId);
//         return {
//           ...product,
//           category: category ? category.name : null,
//         };
//       }
//       return { ...product, category: null };
//     });

//     client.release();
//     console.log('Query result:', mappedProducts); // Debugging hasil query
//     return NextResponse.json(mappedProducts, { status: 200 });
//   } catch (error) {
//     console.error('Error fetching products:', error);
//     return NextResponse.json({ error: 'Failed to fetch products', details: error.message }, { status: 500 });
//   }
// }

// export async function POST(request) {
//   try {
//     const { token } = await request.json();
//     if (!token) {
//       return NextResponse.json({ error: 'Token is required' }, { status: 400 });
//     }
//     console.log('Attempting to connect to database for logout...');
//     const client = await pool.connect();
//     console.log('Connected to database for logout!');
//     const sessionResult = await client.query(
//       'SELECT * FROM sessions WHERE token = $1 AND expires_at > NOW()',
//       [token]
//     );
//     if (sessionResult.rows.length === 0) {
//       client.release();
//       return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
//     }
//     await client.query('DELETE FROM sessions WHERE token = $1', [token]);
//     client.release();
//     return NextResponse.json({ message: 'Logged out successfully' }, { status: 200 });
//   } catch (error) {
//     console.error('Error during logout:', error);
//     return NextResponse.json({ error: 'Failed to log out', details: error.message }, { status: 500 });
//   }
// }

// import { NextResponse } from 'next/server';
// import { Pool } from 'pg';

// // Inisialisasi pool dengan timeout yang lebih panjang
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
//   connectionTimeoutMillis: 15000, // Timeout 15 detik
//   idleTimeoutMillis: 30000, // Idle timeout 30 detik
// });

// export async function GET() {
//   try {
//     const client = await pool.connect();
//     // JOIN ke tabel Category berdasarkan kolom "categoryId"
//     const result = await client.query(`
//       SELECT
//         p.id,
//         p.name,
//         p.price,
//         p.image,
//         p.description,
//         c.id AS categoryId,
//         c.name AS categoryName
//       FROM "Product" p
//       JOIN "Category" c ON p."categoryId" = c.id
//     `);
//     client.release();

//     // Bentuk ulang data sesuai type frontend
//     const products = result.rows.map((row) => ({
//       id: row.id,
//       name: row.name,
//       price: row.price,
//       image: row.image,
//       description: row.description,
//       category: {
//         id: row.categoryid,
//         name: row.categoryname,
//       },
//     }));

//     return NextResponse.json(products, { status: 200 });
//   } catch (error) {
//     console.error('Error fetching products:', error);
//     return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
//   }
// }

// export async function POST(request) {
//   try {
//     const { token } = await request.json();
//     if (!token) {
//       return NextResponse.json({ error: 'Token is required' }, { status: 400 });
//     }
//     const client = await pool.connect();
//     const sessionResult = await client.query(
//       'SELECT * FROM sessions WHERE token = $1 AND expires_at > NOW()',
//       [token]
//     );
//     if (sessionResult.rows.length === 0) {
//       client.release();
//       return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
//     }
//     await client.query('DELETE FROM sessions WHERE token = $1', [token]);
//     client.release();
//     return NextResponse.json({ message: 'Logged out successfully' }, { status: 200 });
//   } catch (error) {
//     console.error('Error during logout:', error);
//     return NextResponse.json({ error: 'Failed to log out' }, { status: 500 });
//   }
// }

import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET() {
  try {
    const result = await sql`
      SELECT p.id, p.name, p.price, p.image, p.description, c.id AS category_id, c.name AS category_name
      FROM "Product" p
      JOIN "Category" c ON p."categoryId" = c.id
      WHERE c.name IN ('food', 'drink');
    `;

    const Product = result.rows.map(row => ({
      id: row.id,
      name: row.name,
      price: row.price,
      image: row.image,
      description: row.description,
      category: {
        id: row.category_id,
        name: row.category_name
      }
    }));

    return NextResponse.json(Product);
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return new NextResponse(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}
