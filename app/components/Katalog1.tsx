'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaShoppingCart } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import Link from "next/link";

const products = {
  food: [
    { id: 1, name: "Spiderweb Quesadilla", price: 50000, image: "/spider.jpg" },
    { id: 2, name: "Bloody Eyeball Bites", price: 30000, image: "/eyeball.jpg" },
    { id: 3, name: "Spooky Ghost Pizza", price: 75000, image: "/pizza.jpg" },
    { id: 4, name: "Witch’s Fingers", price: 20000, image: "/fingers.jpg" },
    { id: 9, name: "Buried Alive Bites", price: 25000, image: "/buried.jpg" },
  ],
  drink: [
    { id: 5, name: "Bloody Vision", price: 30000, image: "/vision.jpg" },
    { id: 6, name: "Bloody Elixir", price: 30000, image: "/elixir.jpg" },
    { id: 7, name: "Graveyard Pudding", price: 25000, image: "/puding.jpg" },
    { id: 8, name: "Haunted Ghost Shake", price: 28000, image: "/ghost.jpg" },
    { id: 10, name: "Vampire Blood Bags", price: 40000, image: "/vampire.jpg" },
  ],
};

export default function Menu() {
  const [cart, setCart] = useState<Record<number, number>>({});
  const [quantities, setQuantities] = useState<Record<number, number>>({});
  const [selectedCategory, setSelectedCategory] = useState<"food" | "drink" | null>(null);
  const [visibleCount, setVisibleCount] = useState(4);
  const [searchQuery, setSearchQuery] = useState("");
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Lacquer&family=Creepster&family=Chilanka&display=swap=Baloo+2&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const allProducts = selectedCategory === null
    ? [...products.food, ...products.drink]
    : products[selectedCategory];

  const handleQuantityChange = (id: number, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta),
    }));
  };

  const handleAddToCart = (id: number) => {
    setCart((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + (quantities[id] || 0),
    }));
    setQuantities((prev) => ({ ...prev, [id]: 0 }));
  };

  const handleCategoryChange = (category: "food" | "drink" | null) => {
    setSelectedCategory(category);
    setVisibleCount(4);
  };

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setVisibleCount(allProducts.length);
    }
  };

  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const visibleProducts = searchQuery ? filteredProducts : allProducts.slice(0, visibleCount);

  return (
    <div className="relative min-h-screen text-white flex flex-col items-center"
      style={{ boxShadow: "0 0 30px #B8860B" }}
    >
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white py-6 flex justify-center text-lg font-semibold z-50">
        <div className="absolute left-6">
          <Image
            src="/profil.jpg"
            alt="Profile Picture"
            width={40}
            height={80}
            className="rounded-full border-2 border-gray-800 cursor-pointer"
            onClick={() => setIsProfileOpen(true)}
          />
        </div>
        <ul className="flex space-x-8">
          <li><Link href="/home" className="cursor-pointer hover:text-orange-500 transition duration-300">HOME</Link></li>
          <li><Link href="/about" className="cursor-pointer hover:text-orange-500 transition duration-300">ABOUT</Link></li>
          <li><Link href="/katalog" className="cursor-pointer hover:text-orange-500 transition duration-300">KATALOG</Link></li>
        </ul>
      </nav>

      {/* Body */}
      <div className="min-h-screen p-10 text-white mt-24 w-full">
        <div className="flex justify-between items-center mb-8">
          {/* Kategori */}
          <div className="text-lg font-semibold flex space-x-4" style={{ fontFamily: "Lacquer, cursive", fontSize: "40px" }}>
            <button
              className={`cursor-pointer ${selectedCategory === 'food' ? 'text-orange-500 font-bold' : 'text-white'} transition duration-300`}
              onClick={() => handleCategoryChange("food")}
            >
              Food
            </button>
            <span className="text-gray-400">|</span>
            <button
              className={`cursor-pointer ${selectedCategory === 'drink' ? 'text-orange-500 font-bold' : 'text-white'} transition duration-300`}
              onClick={() => handleCategoryChange("drink")}
            >
              Drink
            </button>
          </div>

          {/* Search dan Cart */}
          <div className="flex items-center space-x-4">
            <div className="relative w-full max-w-4xl flex items-center">
              <input
                type="text"
                placeholder="Search products........"
                className="w-[320px] h-[40px] pl-12 bg-white rounded-full shadow-lg text-lg outline-none"
                style={{ fontFamily: "'Chilanka', cursive", color: '#8FAFBC', fontSize: '15px' }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
              />
              {!searchQuery && (
                <FiSearch
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
              )}
            </div>
            <div className="relative">
              <FaShoppingCart size={24} className="text-white cursor-pointer" />
              {Object.keys(cart).length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-xs text-white rounded-full w-5 h-5 flex items-center justify-center">
                  {Object.values(cart).reduce((a, b) => a + b, 0)}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Produk Grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 justify-items-center">
          {visibleProducts.map((product) => (
            <div key={product.id} className="text-center relative">
              <div
                className="bg-black bg-opacity-40 p-4 rounded-lg flex flex-col"
                style={{
                  width: '300px',
                  height: '300px',
                  boxShadow: "0 6px 15px rgba(184, 134, 11, 0.6)"
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <button
                  className="w-full bg-[#3A002D] hover:bg-[#550044] text-white font-semibold py-3 tracking-widest"
                  style={{
                    fontFamily: "'Lacquer', cursive",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                    letterSpacing: "2px",
                    fontSize: "29px",
                    borderBottomLeftRadius: "20px",
                    borderBottomRightRadius: "20px"
                  }}
                  onClick={() => handleAddToCart(product.id)}
                >
                  ADD TO CART
                </button>
              </div>
              <div className="mt-4" style={{ width: '300px' }}>
                <h2
                  className="bg-gray-900 text-center py-2 rounded-2xl text-lg break-words"
                  style={{
                    fontFamily: "'Chilanka', cursive",
                    color: '#8FAFBC'
                  }}
                >
                  {product.name}
                </h2>
                <p className="text-lg" style={{ fontFamily: "'Chilanka', cursive", color: '#8FAFBC' }}>
                  Rp. {product.price.toLocaleString()}
                </p>
                <div className="flex items-center justify-center mt-2 space-x-2">
                  <button className="bg-white-700 text-white px-3 py-1 rounded" onClick={() => handleQuantityChange(product.id, -1)}>-</button>
                  <span className="text-xl font-semibold">{quantities[product.id] || 0}</span>
                  <button className="bg-white-700 text-white px-3 py-1 rounded" onClick={() => handleQuantityChange(product.id, 1)}>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol Show More */}
        {visibleCount < allProducts.length && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setVisibleCount(visibleCount + 4)}
              className="text-white text-lg font-semibold hover:underline transition"
              style={{ fontFamily: "'Baloo', cursive", fontSize: "30px" }}
            >
              Show More Details!
            </button>
          </div>
        )}

        {/* Profile Popup */}
        {isProfileOpen && (
          <div className="fixed top-[90px] left-6 bg-[#0E1A2B] text-white rounded-xl shadow-lg px-6 w-80 z-[999]"
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
                <p 
                  className="text-sm mb-4" 
                  style={{ color: "#8FAFBC" }}
                >
                  2312311@gmail.com
                </p>
                <div className="mt-2 mb-4"> {/* Tambahkan sedikit jarak atas */}
                <button
                  onClick={() => {
                    alert("Logged out!");
                    setIsProfileOpen(false);
                  }}
                  className="bg-red-700 hover:bg-red-800 px-4 py-1.5 text-black rounded-full text-xs font-semibold"
                >
                  LOGOUT
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
