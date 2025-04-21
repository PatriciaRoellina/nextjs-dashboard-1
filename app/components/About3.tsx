"use client";
import Image from "next/image";
import { lacquer, chilanka,cinzel } from "../ui/fonts";

const About3 = () => {
  const staffData = [
    {
      name: "patricia AUDREY roellina",
      nickname: "AUDREY",
      image: "/audrey.jpg",
      description:
        "DI BALIK SETIAP TEGUKAN YANG BIKIN MERINDING, ADA TANGAN TERAMPIL AUDREY SEBAGAI BARISTA ANDALAN. IA MERACIK MINUMAN DENGAN SENTUHAN KHAS YANG MEMADUKAN CITA RASA UNIK DAN ATMOSFER MENCEKAM. MEMBUAT PENGALAMAN MINUM DI BITES & BREWS JADI TAK TERLUPAKAN.",
    },
    {
      name: "ni komang DESY wulandari",
      nickname: "DESY",
      image: "/desy.jpg",
      description:
        "KALAU SUASANA HOROR DI BITES & BREWS BIKIN BULU KUDUK MERINDING, ITU SEMUA BERKAT KREATIVITAS DESY. IA BERTANGGUNG JAWAB MENGHADIRKAN DEKORASI YANG MEMANJAKAN MATA SEKALIGUS MEMBUAT JANTUNG BERDEBAR. MENJADIKAN SETIAP SUDUT KEDAI INI SPOT FOTO YANG WAJIB DIABADIKAN.",
    },
    {
      name: "magdalena d g LUNA sari",
      nickname: "LUNA",
      image: "/luna.jpg",
      description:
        "DI DAPUR BITES & BREWS, LUNA ADALAH SOSOK YANG MEMASTIKAN SETIAP HIDANGAN PUNYA RASA YANG KONSISTEN DAN MENGGUGAH SELERA. DENGAN PENGALAMAN BERTAHUN-TAHUN DI DUNIA KULINER, IA MERAMU BUMBU-BUMBU RAHASIA YANG BIKIN SETIAP GIGITAN TERASA MISTERIUS DAN NAGIH!",
    },
  ];

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gray-900">
      {/* Background Video */}
      <video 
        className="absolute inset-0 w-full h-full object-cover" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="/latar.mp4" type="video/mp4" />
        Browser Anda tidak mendukung video tag.
      </video>

      {/* Konten Staff */}
      <div className="relative flex space-x-8 z-10">
        {staffData.map((staff, index) => (
          <div
            key={index}
            className="bg-black bg-opacity-70 rounded-3xl p-6 text-white text-center w-80"
          >
            <Image
              src={staff.image}
              alt={staff.name}
              width={200}
              height={200}
              className="rounded-xl mb-4 mx-auto"
            />
            <h2 className="text-l font-bold mb-2">
              {staff.name.split(" ").map((word, i) => (
                <span
                  key={i}
                  style={{ fontFamily: "'lacquer', cursive" }}
                  className={`${
                    word.toUpperCase() === staff.nickname
                      ? "text-orange-400 text-2xl mx-1"
                      : "text-white text-l mx-1"
                  }`}
                >
                  {word}
                </span>
              ))}
            </h2>
            <p 
              className="text-sm text-gray-300"
              >
                {staff.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About3;
