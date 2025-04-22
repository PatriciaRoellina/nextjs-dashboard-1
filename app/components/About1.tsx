"use client";
import Link from "next/link";
import Image from "next/image";
import { lacquer, chilanka } from "../ui/fonts";

const About1 = () => {
  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gray-900">
      <video 
        className="absolute inset-0 w-full h-full object-cover" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source 
          src="/latar.mp4" 
          type="video/mp4" 
        />
        Browser Anda tidak mendukung video tag.
      </video>

      <div className="relative min-h-screen  text-white flex flex-col items-center justify-center">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white py-6 flex items-center justify-center text-lg font-semibold z-50">
          {/*profil*/}
          <div className="absolute left-10 ">
            <Image 
              src="/profil.jpg" // Ganti dengan path gambar profilmu
              alt="Profile Picture"
              width={50} 
              height={50} 
              className="rounded-full border-2 border-gray-800"
            />
          </div>

          {/* menu */}
          <ul className="flex space-x-8">
            <li>
              <Link 
                href="/home" 
                className="cursor-pointer hover:text-orange-500 transition duration-300"
                >
                  HOME
                </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="cursor-pointer hover:text-orange-500 transition duration-300"
              >
                ABOUT
                </Link>
            </li>
            <li>
              <Link href="/katalog" className="cursor-pointer hover:text-orange-500 transition duration-300">KATALOG</Link>
            </li>
          </ul>
        </nav>
        
        {/*deskripsi*/}
        <div 
          className="p-5 rounded-lg w-3/4 text-center relative"
          style={{
            background: "rgba(0, 0, 0, 0.7)", // Background hitam transparan
            boxShadow: "0 0 30px #B8860B", // Glow oranye
          }}>
          <h1
            className="text-4xl font-bold flex items-center justify-center"
            style={{ fontFamily: "'lacquer', cursive" }}
          >
            <span className="text-yellow-500">💀BITES</span>
            <Link href="/katalog">
              <Image
                src="/logo2.png"
                alt="Logo Bites & Brews"
                width={150}
                height={150}
                className="cursor-pointer hover:scale-110 transition-transform duration-300"
              />
            </Link>
            <span className="text-orange-500">BREWS💀</span>
          </h1>
          <p className="text-xl">
            SELAMAT DATANG DI BITES & BREW, TEMPAT DI MANA RASA 
            LEZAT BERTEMU DENGAN SUASANA HOROR YANG 
            MENCEKAM! KAMI ADALAH KEDAI MAKANAN DAN 
            MINUMAN BERTEMA HOROR YANG SIAP MEMBERIKAN 
            PENGALAMAN UNIK UNTUK PARA PENCINTA MISTERI DAN 
            SENSASI MENYERAMKAN. SETIAP GIGITAN DAN TEGUKAN DI 
            SINI AKAN MEMBAWA KAMU KE DUNIA LAIN YANG PENUH KEJUTAN.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About1;