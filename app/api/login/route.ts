// import { NextResponse } from 'next/server';
// import { Pool } from 'pg';

// // Koneksi ke PostgreSQL, pastikan DATABASE_URL ada di .env.local
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });

// export async function POST(request: Request) {
//   try {
//     const { name, password } = await request.json();

//     // Validasi input
//     if (!name || !password) {
//       return NextResponse.json(
//         { success: false, message: "Username dan password harus diisi" },
//         { status: 400 }
//       );
//     }

//     // Cek ke database
//     const result = await pool.query(
//       'SELECT * FROM "Customer" WHERE LOWER("name") = LOWER($1) AND password = $2',
//       [name, password]
//     );

//     if (result.rows.length > 0) {
//       // Login berhasil, buat token dummy (bisa ganti dengan JWT nanti)
//       const token = 'dummy-token-' + Math.random().toString(36).substring(2);

//       return NextResponse.json({
//         success: true,
//         token,
//         message: 'Login berhasil',
//         user: {
//           id: result.rows[0].id,
//           name: result.rows[0].name,
//         },
//       });
//     } else {
//       return NextResponse.json(
//         { success: false, message: 'Username atau password salah' },
//         { status: 401 }
//       );
//     }
//   } catch (error) {
//     console.error("Login API error:", error);
//     return NextResponse.json(
//       { success: false, message: "Terjadi kesalahan server" },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from 'next/server';
import { Pool } from 'pg';

// Koneksi ke database PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = body.name?.trim();
    const password = body.password?.toString().trim();

    // Validasi input
    if (!name || !password) {
      return NextResponse.json(
        { success: false, message: "Username dan password harus diisi" },
        { status: 400 }
      );
    }

    // Ambil user berdasarkan nama (tidak case sensitive)
    const result = await pool.query(
      'SELECT * FROM "Customer" WHERE LOWER("name") = LOWER($1)',
      [name]
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        { success: false, message: "Username tidak ditemukan" },
        { status: 401 }
      );
    }

    const user = result.rows[0];

    // Cek apakah password cocok (case sensitive)
    if (user.password !== password) {
      return NextResponse.json(
        { success: false, message: "Password salah" },
        { status: 401 }
      );
    }

    // Buat token dummy
    const token = 'dummy-token-' + Math.random().toString(36).substring(2);

    return NextResponse.json({
      success: true,
      token,
      message: "Login berhasil",
      user: {
        id: user.id,
        name: user.name,
      },
    });
  } catch (error) {
    console.error("Login API error:", error);
    return NextResponse.json(
      { success: false, message: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}




// import { NextResponse } from 'next/server';
// import { Pool } from 'pg';

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });

// export async function POST(request: Request) {
//   const { name, password } = await request.json();

//   console.log("Login attempt:", name, password); // DEBUG

//   try {
//     const result = await pool.query(
//       'SELECT * FROM "Customer" WHERE name ILIKE $1 AND password = $2',
//       [name, password]
//     );

//     console.log("Query result:", result.rows); // DEBUG

//     if (result.rows.length > 0) {
//       const token = 'dummy-token-' + Math.random().toString(36).substr(2);
//       return NextResponse.json({
//         success: true,
//         token,
//         message: 'Login berhasil',
//         user: {
//           id: result.rows[0].id,
//           name: result.rows[0].name,
//         },
//       });
//     } else {
//       return NextResponse.json({ success: false, message: 'Username atau password salah' }, { status: 401 });
//     }
//   } catch (error) {
//     console.error("Login error:", error);
//     return NextResponse.json({ success: false, message: 'Terjadi kesalahan server' }, { status: 500 });
//   }
// }
