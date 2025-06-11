import { NextResponse } from 'next/server';
import postgres from 'postgres';
import bcrypt from 'bcryptjs';
// import { v4 as uuidv4 } from 'uuid';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();

    // Validasi input
    if (!name || !email || !password) {
      return NextResponse.json({ error: 'Nama, email, dan password wajib diisi' }, { status: 400 });
    }

    // Cek apakah email sudah ada
    const existingUser = await sql`
      SELECT * FROM "Customer" WHERE email = ${email}
    `;
    if (existingUser.length > 0) {
      return NextResponse.json({ error: 'Email sudah digunakan' }, { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Simpan pengguna ke database
    await sql`
    INSERT INTO "Customer" (name, email, password, role)
    VALUES (${name}, ${email}, ${hashedPassword}, 'customer')
    `;

    return NextResponse.json({ message: 'Registrasi berhasil' }, { status: 201 });
  } catch (error) {
    console.error('Error saat registrasi:', error);
    return NextResponse.json({ error: 'Terjadi kesalahan saat registrasi' }, { status: 500 });
  }
}