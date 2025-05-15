'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiSearch } from 'react-icons/fi';
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
  category: "food" | "drink"; // dari DB ada kategori
};

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<"food" | "drink" | null>(null);
  const [visibleCount, setVisibleCount] = useState(4);
  const [searchQuery, setSearchQuery] = useState("");
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Ambil data produk dari API
    fetch('/api/products')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch products');
        return res.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Gabungkan filter kategori dari produk API
  const allProducts = selectedCategory === null
    ? products
    : products.filter(product => product.category === selectedCategory);

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
  const [selectedProductDetail, setSelectedProductDetail] = useState<Product | null>(null);

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
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-8">
          {/* Kategori */}
          <div className="text-lg font-semibold flex space-x-4 mb-4 md:mb-0" style={{ fontFamily: "Lacquer, cursive", fontSize: "40px" }}>
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

          {/* Search */}
          <div className="flex justify-end w-full md:w-auto">
            <div className="relative w-[320px] flex items-center">
              <input
                type="text"
                placeholder="Search products........"
                className="w-full h-[40px] pl-12 bg-white rounded-full shadow-lg text-lg outline-none"
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
          </div>
        </div>

        {loading && <p>Loading products...</p>}
        {error && <p>Error: {error}</p>}

        {/* Produk Grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 justify-items-center">
          {visibleProducts.map((product) => (
            <div key={product.id} className="text-center relative cursor-pointer" onClick={() => setSelectedProductDetail(product)}>
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
              </div>
            </div>
          ))}
        </div>

        {selectedProductDetail && (
          <div className="fixed inset-0 bg-black bg-opacity-70 z-[1000] flex items-center justify-center px-4">
            <div className="bg-[#0E1A2B] rounded-xl max-w-md w-full p-6 relative text-white shadow-lg" style={{ boxShadow: "0 0 15px #B8860B" }}>
              <button
                onClick={() => setSelectedProductDetail(null)}
                className="absolute top-2 right-4 text-2xl font-bold text-gray-300 hover:text-white"
              >
                ✕
              </button>
              <Image
                src={selectedProductDetail.image}
                alt={selectedProductDetail.name}
                width={400}
                height={250}
                className="rounded-lg mb-4 object-cover w-full h-64"
              />
              <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Lacquer', cursive" }}>
                {selectedProductDetail.name}
              </h2>
              <p className="mb-2 text-lg text-[#8FAFBC]" style={{ fontFamily: "'Chilanka', cursive" }}>
                Rp. {selectedProductDetail.price.toLocaleString()}
              </p>
              {selectedProductDetail.description && (
                <p className="text-sm text-[#A0AEC0]" style={{ fontFamily: "'Chilanka', cursive" }}>
                  {selectedProductDetail.description}
                </p>
              )}
            </div>
          </div>
        )}

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
                width={100}
                height={100}
                className="rounded-full"
              />
              <h1 className="text-2xl font-semibold mt-4">Tiara Rachmita</h1>
              <p className="text-[#8FAFBC] mt-2">Fresh Graduate Informatics Engineering</p>
              <p className="text-center mt-4 text-[#8FAFBC]">
                Salam Kenal! Terima kasih sudah mampir. Aku senang sekali bisa berbagi menu dan info menarik buat kamu.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
