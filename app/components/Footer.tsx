import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1a0624] text-gray-300 py-10 px-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-700">
      
      {/* Kiri: Logo & Teks */}
      <div className="flex items-center space-x-4">
        <div>
          <div
            className="flex items-center text-2xl space-x-1"
            style={{ fontFamily: "'lacquer', cursive" }}
          >
            <span className="text-yellow-400">💀BITES</span>
            <Link href="/katalog">
              <Image
                src="/logo2.png"
                alt="logo"
                width={100}
                height={50}
                className="cursor-pointer hover:scale-110 transition-transform duration-300"
              />
            </Link>
            <span className="text-orange-400">BREWS💀</span>
          </div>
          <p className="text-sm mt-1">
            © 2025 Bites & Brews —
            <br />
            <span className="tracking-wider">
              A TASTE OF TERROR. ALL RIGHTS RESERVED.
            </span>
          </p>
        </div>
      </div>

      {/* Garis Tengah */}
      <div className="hidden md:block border-l h-20 border-gray-500 mx-6" />

      {/* Kanan: Info Sosmed */}
      <div className="text-sm text-right space-y-2 mt-4 md:mt-0">
        <p>
          <span className="uppercase tracking-widest">Contact us:</span>{" "}
          <span className="text-white">@bitesnbrew</span> | +62 812-1234-2341
        </p>
        <p className="uppercase tracking-widest">
          Designed by: <span className="text-white">ALD Team</span>
        </p>
      </div>
      
    </footer>
  );
};

export default Footer;
