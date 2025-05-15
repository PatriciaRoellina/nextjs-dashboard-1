"use client";
import Image from "next/image";
import { lacquer, chilanka } from "@/app/ui/fonts";

const HomePage2 = () => {
  return (
    <div 
      className="relative w-full min-h-screen flex flex-col items-center justify-start py-8 px-4"
      style={{
        background: "rgba(0, 0, 0, 0.5)"
      }}>
      <h1 
        className="text-3xl md:text-4xl text-red-600 mt-4 mb-2 text-center" 
        style={{ fontFamily: "'lacquer', cursive" }}
      >
        Whispers from the Underworld
      </h1>
      <div 
        className="relative z-10 text-white p-4 md:p-6 rounded-3xl shadow-lg max-w-6xl w-full"
      >
        <div className="text-center mb-6">
          <p className="text-sm md:text-base">
            Indulgences So Good, Even Demons Crave Them
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-4">
          {/*profil 1*/}
          <div className="md:w-1/3 text-center">
            <div
              className="rounded-2xl shadow-lg p-4"
              style={{
                minHeight: "400px", // kamu bisa tambah ini
                width: "300px", 
                boxShadow: "0 0 20px 5px rgba(184, 134, 11, 0.4)",
                background: "rgba(0, 0, 0, 0.4)"
              }}
            >
              <div className="rounded-2xl overflow-hidden mb-3 flex justify-center items-center">
              <Image
                src="/profil.jpg"
                alt="Labu 2"
                width={160}
                height={160}
                className="object-cover"
                style={{
                  borderTopLeftRadius: "30px",
                  borderTopRightRadius: "30px"
                }}
              />
              </div>
              <p className="text-xs md:text-sm">
                'COOKIE WITCH'S FINGERS' INI RENYAH DI LUAR, LEMBUT DI DALAM, DAN SAUS MERAHNYA SEPERTI DARAH SEGAR! SERAM TAPI BIKIN NAGIH! - ALEX, PECINTA HOROR
              </p>
            </div>
          </div>

          {/*profil 2*/}
          <div className="md:w-1/3 text-center">
            <div
              className="rounded-2xl shadow-lg p-4"
              style={{
                minHeight: "400px", // kamu bisa tambah ini
                width: "300px", 
                boxShadow: "0 0 20px 5px rgba(184, 134, 11, 0.4)",
                background: "rgba(0, 0, 0, 0.4)"
              }}
            >
              <div className="rounded-2xl overflow-hidden mb-3 flex justify-center items-center">
              <Image
                src="/profil.jpg"
                alt="Labu 2"
                width={160}
                height={160}
                className="object-cover"
                style={{
                  borderTopLeftRadius: "30px",
                  borderTopRightRadius: "30px"
                }}
              />
              </div>
              <p className="text-xs md:text-sm">
                'MINUMAN DI SINI BENAR-BENAR TERASA SEPERTI RAMUAN TERKUTUK! 'BLOODY VISION TERLALU NIKMAT SAMPAI AKU MERASA JIWAKU HAMPIR DIJUAL KE IBLIS. AKAN DATANG LAGI JIKA AKU MASIH HIDUP! - ANNA, PELANGGAN SETIA
              </p>
            </div>
          </div>

          {/*profil 3*/}
          <div className="md:w-1/3 text-center">
            <div
              className="rounded-2xl shadow-lg p-4"
              style={{
                minHeight: "400px", // kamu bisa tambah ini
                width: "300px", 
                boxShadow: "0 0 20px 5px rgba(184, 134, 11, 0.4)",
                background: "rgba(0, 0, 0, 0.4)"
              }}
            >
              <div className="rounded-2xl overflow-hidden mb-3 flex justify-center items-center">
              <Image
                src="/profil.jpg"
                alt="Labu 2"
                width={160}
                height={160}
                className="object-cover"
                style={{
                  borderTopLeftRadius: "30px",
                  borderTopRightRadius: "30px"
                }}
              />
              </div>
              <p className="text-xs md:text-sm">
                'SUASANA DI SINI SEPERTI DUNIA LAIN. MAKANAN DAN MINUMANNYA SEPERTI RACIKAN PENYIHIR. AKU MERASA SEPERTI SEDANG MENIKMATI JAMUAN DI KASTIL VAMPIR! - BELLA, NIGHTCRAWLER SEJATI
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage2;
