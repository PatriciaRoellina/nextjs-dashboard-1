"use client";
import Link from "next/link";
import Image from "next/image";
import { lacquer, chilanka,cinzel } from "../ui/fonts";

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

      <div 
        className="p-10 rounded-lg w-3/4 text-white relative flex flex-col items-center" 
        style={{
          background: "rgba(0, 0, 0, 0.7)",
          boxShadow: "0 0 30px #B8860B",
        }}
      >
        {/* Bagian Atas: Gambar & Informasi */}
        <div className="flex w-full mb-6">
          {/* Gambar Toko (Kiri) */}
          <div className="w-1/3 flex items-center justify-center mr-10">
            <Image 
              src="/toko.jpeg" 
              alt="Toko" 
              width={500} 
              height={500} 
              className="rounded-lg" 
            />
          </div>

          {/* Informasi (Kanan) */}
          <div className="w-2/3 text-left flex flex-col justify-center">
            <p 
            className="text-xl mb-2">
              <strong>LOKASI:</strong> JL. HANTU GENTAYANGAN NO. 13, KOTA KEGELAPAN
            </p>
            <p className="text-xl mb-2">
              <strong>BUKA:</strong> SETIAP HARI (16.00-00.00)
            </p>
            <p className="text-xl mb-2">
              <strong>HUBUNGI KAMI:</strong>
            </p>
            <p className="text-l mb-2">• WHATSAPP: +62 812-1234-2341</p>
            <p className="text-l">• INSTAGRAM: @BITESNBREW</p>
          </div>
        </div>

        {/* Bagian Bawah: Quote (Tengah) */}
        <div className="text-center w-full">
          <p className="text-l">
            "AYO TANTANG NYALIMU DAN RASAKAN 
          </p>
        </div>

        <div className="text-center w-full">
          <p className="text-l">
            SENSASI MAKAN DI DUNIA HOROR BERSAMA BITES & BREWS!"
          </p>
        </div>
      </div>
    </div>
  );
};

export default About1;