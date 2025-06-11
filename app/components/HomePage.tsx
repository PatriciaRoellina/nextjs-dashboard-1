// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react"; // Import useState
// import { useRouter } from "next/navigation";

// const HomePage = () => {
//   const [isProfileOpen, setIsProfileOpen] = useState(false); // State untuk membuka/tutup dropdown profil
//   const router = useRouter();

// const handleLogout = () => {
//   localStorage.removeItem("userToken");
//   setIsProfileOpen(false);
//   alert("Logged out successfully!");
//   router.push("/auth/login");
// }

//   return (
//     <div className="relative flex justify-center items-center min-h-screen bg-gray-900">
//       <video 
//         className="absolute inset-0 w-full h-full object-cover" 
//         autoPlay 
//         loop 
//         muted 
//         playsInline
//       >
//         <source 
//           src="/latar.mp4" 
//           type="video/mp4" 
//         />
//         Browser Anda tidak mendukung video tag.
//       </video>

//       <div className="relative min-h-screen text-white flex flex-col items-center">
//         {/* Navbar */}
//         <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white py-6 flex justify-center text-lg font-semibold z-50">
//           {/* Profil */}
//           <div className="absolute left-6 cursor-pointer" onClick={() => setIsProfileOpen(!isProfileOpen)}>
//             <Image 
//               src="/profil.jpg" 
//               alt="Profile Picture"
//               width={40} 
//               height={40} 
//               className="rounded-full border-2 border-gray-800"
//             />
//           </div>

//           {/* Menu */}
//           <ul 
//             className="flex space-x-8" 
//             style= {{fontFamily: "Nosifer"}}
//           >
//             <li><Link href="/home" className="cursor-pointer hover:text-orange-500 transition duration-300">HOME</Link></li>
//             <li><Link href="/about" className="cursor-pointer hover:text-orange-500 transition duration-300">ABOUT</Link></li>
//             <li><Link href="/katalog" className="cursor-pointer hover:text-orange-500 transition duration-300">KATALOG</Link></li>
//             <li><Link href="/contact" className="cursor-pointer hover:text-orange-500 transition duration-300">CONTACT</Link></li>
//           </ul>
//         </nav>

//         {/* Deskripsi */}
//         <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
//           <h1 
//             className="text-8xl font-bold flex items-center space-x-4" 
//             style={{ fontFamily: "'lacquer', cursive" }}
//           >
//             <span className="text-yellow-500">BITES</span>
//             {/* Logo sebagai pengganti "&" */}
//             <Link href="/katalog">
//               <Image 
//                 src="/logo2.png" 
//                 alt="Logo Bites & Brews" 
//                 width={300} 
//                 height={300} 
//                 className="cursor-pointer hover:scale-110 transition-transform duration-300"
//               />
//             </Link>
//             <span className="text-orange-500">BREWS</span>
//           </h1>
//           <p 
//             className="text-2xl mt-4 font-bold text-gray-400"
//             style={{ fontFamily: "chilanka"}}
//           >
//             "A Taste of Terror"
//           </p>
//         </div>
//       </div>

//       {/* Profile Dropdown */}
//       {isProfileOpen && (
//         <div className="fixed top-[90px] left-6 bg-[#0E1A2B] text-white rounded-xl shadow-lg px-6 w-80 z-[999]"
//           style={{ boxShadow: '0 0 10px #B8860B' }}
//         >
//           <button
//             onClick={() => setIsProfileOpen(false)}
//             className="absolute top-2 right-2 text-3xl font-bold text-gray-300 hover:text-white"
//           >
//             ✕
//           </button>
//           <div className="flex flex-col items-center mt-6">
//             <Image
//               src="/profil.jpg"
//               alt="Profile Picture"
//               width={70}
//               height={70}
//               className="rounded-full border-4 border-yellow-600 mb-3"
//             />
//             <h2 
//               style={{ fontFamily: "'Chilanka', cursive", fontSize: "24px", color: "#8FAFBC" }}
//             >
//               Marklee
//             </h2>
//             <p 
//               className="text-sm mb-4" 
//               style={{ color: "#8FAFBC" }}
//             >
//               2312311@gmail.com
//             </p>
//             <div className="mt-2 mb-4">
//               <button
//                 onClick={handleLogout}
//                 className="bg-red-700 hover:bg-red-800 px-4 py-1.5 text-black rounded-full text-xs font-semibold"
//               >
//                 LOGOUT
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HomePage;

"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
      const dummyEmail = `${storedUsername}@gmail.com`;
      setEmail(dummyEmail);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("username");
    setIsProfileOpen(false);
    alert("Logged out successfully!");
    router.push("/auth/login");
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gray-900">
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

      <div className="relative min-h-screen text-white flex flex-col items-center">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white py-6 flex justify-center text-lg font-semibold z-50">
          {/* Profil */}
          <div
            className="absolute left-6 cursor-pointer"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          >
            <Image
              src="/profil.jpg"
              alt="Profile Picture"
              width={40}
              height={40}
              className="rounded-full border-2 border-gray-800"
            />
          </div>

          {/* Menu */}
          <ul className="flex space-x-8" style={{ fontFamily: "Nosifer" }}>
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
              <Link
                href="/katalog"
                className="cursor-pointer hover:text-orange-500 transition duration-300"
              >
                KATALOG
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="cursor-pointer hover:text-orange-500 transition duration-300"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>

        {/* Deskripsi */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
          <h1
            className="text-8xl font-bold flex items-center space-x-4"
            style={{ fontFamily: "'lacquer', cursive" }}
          >
            <span className="text-yellow-500">BITES</span>
            <Link href="/katalog">
              <Image
                src="/logo2.png"
                alt="Logo Bites & Brews"
                width={300}
                height={300}
                className="cursor-pointer hover:scale-110 transition-transform duration-300"
              />
            </Link>
            <span className="text-orange-500">BREWS</span>
          </h1>
          <p
            className="text-2xl mt-4 font-bold text-gray-400"
            style={{ fontFamily: "chilanka" }}
          >
            "A Taste of Terror"
          </p>
        </div>
      </div>

      {/* Profile Dropdown */}
      {isProfileOpen && (
        <div
          className="fixed top-[90px] left-6 bg-[#0E1A2B] text-white rounded-xl shadow-lg px-6 w-80 z-[999]"
          style={{ boxShadow: "0 0 10px #B8860B" }}
        >
          <button
            onClick={() => setIsProfileOpen(false)}
            className="absolute top-2 right-2 text-3xl font-bold text-gray-300 hover:text-white"
          >
            ✕
          </button>
          <div className="flex flex-col items-center mt-6">
            <Image
              src="/profil.jpg"
              alt="Profile Picture"
              width={70}
              height={70}
              className="rounded-full border-4 border-yellow-600 mb-3"
            />
            <h2
              style={{
                fontFamily: "'Chilanka', cursive",
                fontSize: "24px",
                color: "#8FAFBC",
              }}
            >
              {username || "Guest"}
            </h2>
            <p
              className="text-sm mb-4"
              style={{ color: "#8FAFBC" }}
            >
              {email || "guest@example.com"}
            </p>
            <div className="mt-2 mb-4">
              <button
                onClick={handleLogout}
                className="bg-red-700 hover:bg-red-800 px-4 py-1.5 text-black rounded-full text-xs font-semibold"
              >
                LOGOUT
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
