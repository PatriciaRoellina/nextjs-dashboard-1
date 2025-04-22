"use client";
import Image from "next/image";
import { lacquer } from "@/app/ui/fonts";

const HomePage2 = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black to-red-900 flex flex-col items-center py-12 px-4">
      {/* Judul */}
      <div
        className="text-center text-white mb-10 max-w-md"
        style={{ fontFamily: "'lacquer', cursive" }}
      >
        <h1 className="text-4xl text-red-600 mb-2 uppercase tracking-widest">
          Hell's Favorite
        </h1>
        <p className="text-base font-light">
          Indulgences So Good, Even Demons Crave Them
        </p>
      </div>

      {/* Konten Produk */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        {/* Item 1 */}
        <div className="bg-black bg-opacity-40 p-3 rounded-2xl shadow-md text-white flex flex-col items-center">
          <div className="rounded-xl overflow-hidden shadow-lg w-[220px] h-[220px]">
            <Image
              src="/minuman.jpg"
              alt="Bloody Vision"
              width={220}
              height={220}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-red-600 mt-3 px-4 py-1.5 rounded-full text-sm font-semibold text-center w-full">
            Bloody Vision - Rp. 30.000
          </div>
          <p className="mt-1 text-center text-xs px-1">
          Koktail merah menyala berisi 'bola mata' buah dan jelly—minuman segar yang tampak mengerikan tapi nikmat!
          </p>
        </div>

        {/* Item 2 */}
        <div className="bg-black bg-opacity-40 p-3 rounded-2xl shadow-md text-white flex flex-col items-center">
          <div className="rounded-xl overflow-hidden shadow-lg w-[220px] h-[220px]">
            <Image
              src="/telur.jpg"
              alt="Witch's Fingers"
              width={220}
              height={220}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-red-600 mt-3 px-4 py-1.5 rounded-full text-sm font-semibold text-center w-full">
            Witch's Fingers - Rp. 30.000
          </div>
          <p className="mt-1 text-center text-xs px-1">
          Telur setan disulap jadi tatapan horor—mata berdarah yang siap memeriahkan pesta Halloween-mu!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage2;