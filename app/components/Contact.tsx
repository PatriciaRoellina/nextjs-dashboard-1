'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export default function Contact() {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState("contact");

  const handleMenuClick = (category) => {
    setSelectedCategory(category);
  };

  const handleLogout = () => {
    localStorage.removeItem('userToken')
    setIsProfileOpen(false)
    alert('Logged out successfully!')
    router.push('/auth/login')
  }

  return (
    <div className="min-h-screen flex flex-col">
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
          <ul 
            className="flex space-x-8"
            style= {{fontFamily: "Nosifer"}}
            >
            <li>
              <Link 
                href="/home" 
                onClick={() => handleMenuClick("home")} // Set kategori aktif saat diklik
                className={`cursor-pointer ${selectedCategory === "home" ? "text-orange-500 font-bold" : "text-white"} hover:text-orange-500 transition duration-300`}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                onClick={() => handleMenuClick("about")} // Set kategori aktif saat diklik
                className={`cursor-pointer ${selectedCategory === "about" ? "text-orange-500 font-bold" : "text-white"} hover:text-orange-500 transition duration-300`}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link 
                href="/katalog" 
                onClick={() => handleMenuClick("katalog")} // Set kategori aktif saat diklik
                className={`cursor-pointer ${selectedCategory === "katalog" ? "text-orange-500 font-bold" : "text-white"} hover:text-orange-500 transition duration-300`}
              >
                KATALOG
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                onClick={() => handleMenuClick("contact")}
                className={`cursor-pointer ${selectedCategory === "contact" ? "text-orange-500 font-bold" : "text-white"} hover:text-orange-500 transition duration-300`}
                >
                  CONTACT
                </Link>
            </li>
          </ul>
      </nav>

      {/* Profile Dropdown */}
      {isProfileOpen && (
        <div
          className="fixed top-[90px] left-6 bg-[#0E1A2B] text-white rounded-xl shadow-lg px-6 w-80 z-[999]"
          style={{ boxShadow: '0 0 10px #B8860B' }}
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
              style={{ fontFamily: "'Chilanka', cursive", fontSize: "24px", color: "#8FAFBC" }}
            >
              Marklee
            </h2>
            <p className="text-sm mb-4" style={{ color: "#8FAFBC" }}>
              2312311@gmail.com
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

      {/* Centered Contact Info */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-sm bg-gray-900 p-8 rounded-lg shadow-lg text-white mt-16 text-center space-y-4">
          <h2
            className="text-2xl font-bold text-red-800"
           style={{ 
                color: '#800000',
                textShadow: "2px 2px 4px rgba(255, 69, 0, 0.7)", 
                fontFamily: "Nosifer" }}
          >
            CONTACT US
          </h2>
          <p>Hubungi kami melalui:</p>
          <p>
            Telepon:{' '}
            <a
              href="tel:+628123456789"
              className="text-cyan-400 hover:underline"
            >
              +62 812-1234-2341
            </a>
          </p>
          <p>
            Instagram:{' '}
            <a
              href="https://instagram.com/bitesnbrew"
              className="text-cyan-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              @bitesnbrew
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
