// 'use client';
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { FiSearch } from 'react-icons/fi';
// import Link from "next/link";

// // Type untuk produk
// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
//   description?: string;
//   category: {
//     id: "120" | "121";
//     name: "food" | "drink";
//   };
// }

// export default function Menu() {
//   const [selectedCategory, setSelectedCategory] = useState<"food" | "drink" | "katalog" | null>(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isProfileOpen, setIsProfileOpen] = useState(false);
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   const productsPerPage = 4;

//   const handleMenuClick = (category) => {
//     setSelectedCategory(category);
//   };

//   useEffect(() => {
//     fetch('/api/products')
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to fetch products");
//         return res.json();
//       })
//       .then((data: Product[]) => {
//         const filtered = data.filter((product) => product.category.name === 'food' || product.category.name === 'drink');
//         setProducts(filtered);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   const allProducts = selectedCategory === null
//     ? products
//     : products.filter((product) => product.category.name === selectedCategory);

//   const filteredProducts = allProducts.filter((product) =>
//     product.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
//   const startIndex = (currentPage - 1) * productsPerPage;
//   const visibleProducts = searchQuery 
//     ? filteredProducts 
//     : filteredProducts.slice(startIndex, startIndex + productsPerPage);

//   const handleCategoryChange = (category: "food" | "drink" | null) => {
//     setSelectedCategory(category);
//     setCurrentPage(1); // Reset to first page when category changes
//   };

//   const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter") {
//       setCurrentPage(1); // Reset to first page on search
//     }
//   };

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//     window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top on page change
//   };

//   const [selectedProductDetail, setSelectedProductDetail] = useState<Product | null>(null);

//   return (
//     <div className="relative min-h-screen text-white flex flex-col items-center" style={{ boxShadow: "0 0 30px #B8860B" }}>
//       {/* Navbar */}
//       <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white py-6 flex justify-center text-lg font-semibold z-50">
//         <div className="absolute left-6">
//           <Image
//             src="/profil.jpg"
//             alt="Profile Picture"
//             width={40}
//             height={80}
//             className="rounded-full border-2 border-gray-800 cursor-pointer"
//             onClick={() => setIsProfileOpen(true)}
//           />
//         </div>

//         {/* Menu */}
//           <ul 
//             className="flex space-x-8"
//             style= {{fontFamily: "Nosifer"}}
//             >
//             <li>
//               <Link 
//                 href="/home" 
//                 onClick={() => handleMenuClick("katalog")} // Set kategori aktif saat diklik
//                 className={`cursor-pointer ${selectedCategory === "home" ? "text-orange-500 font-bold" : "text-white"} hover:text-orange-500 transition duration-300`}
//               >
//                 HOME
//               </Link>
//             </li>
//             <li>
//               <Link 
//                 href="/about" 
//                 onClick={() => handleMenuClick("about")} // Set kategori aktif saat diklik
//                 className={`cursor-pointer ${selectedCategory === "about" ? "text-orange-500 font-bold" : "text-white"} hover:text-orange-500 transition duration-300`}
//               >
//                 ABOUT
//               </Link>
//             </li>
//             <li>
//               <Link 
//                 href="/katalog" 
//                 onClick={() => handleMenuClick("katalog")} // Set kategori aktif saat diklik
//                 className={`cursor-pointer ${selectedCategory === "katalog" ? "text-orange-500 font-bold" : "text-white"} hover:text-orange-500 transition duration-300`}
//               >
//                 KATALOG
//               </Link>
//             </li>
//             <li><Link href="/contact" className="cursor-pointer hover:text-orange-500 transition duration-300">CONTACT</Link></li>
//           </ul>
//       </nav>

//       {/* Konten Utama */}
//       <div className="min-h-screen p-10 text-white mt-24 w-full">
//         <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-8">
//           <div className="text-lg flex space-x-4 mb-4 md:mb-0" style={{ fontFamily: "Lacquer, cursive", fontSize: "40px" }}>
//             <button
//               className={`cursor-pointer ${selectedCategory === 'food' ? 'text-orange-300 font-bold' : 'text-red-800'} transition duration-300`}
//               onClick={() => handleCategoryChange("food")}
//               style={{ 
//                 color: '#800000',
//                 textShadow: "2px 2px 4px rgba(255, 69, 0, 0.7)", 
//                 fontFamily: "Nosifer" }}
//             >
//               Food
//             </button>
//             <span className="text-gray-400">|</span>
//             <button
//               className={`cursor-pointer ${selectedCategory === 'drink' ? 'text-orange-300 font-bold' : 'text-red-800'} transition duration-300`}
//               onClick={() => handleCategoryChange("drink")}
//               style={{ 
//                 color: '#800000',
//                 textShadow: "2px 2px 4px rgba(255, 69, 0, 0.7)", 
//                 fontFamily: "Nosifer" }}
//             >
//               Drink
//             </button>
//           </div>

//           {/* Pencarian */}
//           <div className="flex justify-end w-full md:w-auto">
//             <div className="relative w-[320px] flex items-center">
//               <input
//                 type="text"
//                 placeholder="Search products........"
//                 className="w-full h-[40px] pl-12 bg-white rounded-full shadow-lg text-lg outline-none"
//                 style={{ fontFamily: "'Chilanka', cursive", color: '#8FAFBC', fontSize: '15px' }}
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 onKeyDown={handleSearch}
//               />
//               {!searchQuery && (
//                 <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Grid Produk */}
//         <div className="grid grid-cols-2 gap-x-4 gap-y-6 justify-items-center">
//           {visibleProducts.map((product) => (
//             <div key={product.id} className="text-center relative cursor-pointer" onClick={() => setSelectedProductDetail(product)}>
//               <div className="bg-black bg-opacity-40 p-4 rounded-lg flex flex-col" style={{ width: '300px', height: '300px', boxShadow: "0 6px 15px rgba(184, 134, 11, 0.6)" }}>
//                 <div className="relative w-full h-full">
//                   <Image src={product.image} alt={product.name} fill className="object-cover" />
//                 </div>
//               </div>
//               <div className="mt-4" style={{ width: '300px' }}>
//                 <h2 className="bg-gray-900 text-center py-2 rounded-2xl text-lg break-words" style={{ fontFamily: "'Chilanka', cursive", color: '#8FAFBC' }}>{product.name}</h2>
//                 <p className="text-lg" style={{ fontFamily: "'Chilanka', cursive", color: '#8FAFBC' }}>Rp. {product.price.toLocaleString()}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Pagination */}
//         {totalPages > 1 && (
//           <div className="mt-10 flex justify-center space-x-2">
//             <button
//               onClick={() => handlePageChange(currentPage - 1)}
//               disabled={currentPage === 1}
//               className={`px-4 py-2 rounded-full ${currentPage === 1 ? 'bg-gray-600 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600'} text-white font-semibold transition`}
//               style={{ fontFamily: "'Chilanka', cursive" }}
//             >
//               Previous
//             </button>
//             {Array.from({ length: totalPages }, (_, index) => (
//               <button
//                 key={index + 1}
//                 onClick={() => handlePageChange(index + 1)}
//                 className={`px-4 py-2 rounded-full ${currentPage === index + 1 ? 'bg-orange-500' : 'bg-gray-700 hover:bg-gray-600'} text-white font-semibold transition`}
//                 style={{ fontFamily: "'Chilanka', cursive" }}
//               >
//                 {index + 1}
//               </button>
//             ))}
//             <button
//               onClick={() => handlePageChange(currentPage + 1)}
//               disabled={currentPage === totalPages}
//               className={`px-4 py-2 rounded-full ${currentPage === totalPages ? 'bg-gray-600 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600'} text-white font-semibold transition`}
//               style={{ fontFamily: "'Chilanka', cursive" }}
//             >
//               Next
//             </button>
//           </div>
//         )}

//         {/* Detail Produk */}
//         {selectedProductDetail && (
//           <div className="fixed inset-0 bg-black bg-opacity-70 z-[1000] flex items-center justify-center px-4">
//             <div className="bg-[#0E1A2B] rounded-xl max-w-md w-full p-6 relative text-white shadow-lg" style={{ boxShadow: "0 0 15px #B8860B" }}>
//               <button onClick={() => setSelectedProductDetail(null)} className="absolute top-2 right-4 text-2xl font-bold text-gray-300 hover:text-white">✕</button>
//               <Image src={selectedProductDetail.image} alt={selectedProductDetail.name} width={400} height={250} className="rounded-lg mb-4 object-cover w-full h-64" />
//               <h2 
//                 className="text-xl font-bold mb-2" 
//                 style={{ 
//                   // color: '#800000',
//                   // textShadow: "2px 2px 4px rgba(255, 69, 0, 0.7)", 
//                   fontFamily: "'Nosifer', cursive" }}>{selectedProductDetail.name}</h2>

//               <p className="mb-2 text-lg text-[#8FAFBC]" style={{ fontFamily: "'Chilanka', cursive" }}>Rp. {selectedProductDetail.price.toLocaleString()}</p>
              
//               {selectedProductDetail.description && (
//                 <p className="text-sm text-[#A0AEC0]" style={{ fontFamily: "'Chilanka', cursive" }}>{selectedProductDetail.description}</p>
//               )}
//             </div>
//           </div>
//         )}

//         {/* Dropdown Profile */}
//         {isProfileOpen && (
//           <div className="fixed top-[90px] left-6 bg-[#0E1A2B] text-white rounded-xl shadow-lg px-6 w-80 z-[999]" style={{ boxShadow: '0 0 10px #B8860B' }}>
//             <button onClick={() => setIsProfileOpen(false)} className="absolute top-2 right-2 text-3xl font-bold text-gray-300 hover:text-white">✕</button>
//             <div className="flex flex-col items-center mt-6">
//               <Image src="/profil.jpg" alt="Profile Picture" width={70} height={70} className="rounded-full border-4 border-yellow-600 mb-3" />
//               <h2 style={{ fontFamily: "'Chilanka', cursive", fontSize: "24px", color: "#8FAFBC" }}>Marklee</h2>
//               <p className="text-sm mb-4" style={{ color: "#8FAFBC" }}>2312311@gmail.com</p>
//               <div className="mt-2 mb-4">
//                 <button onClick={() => { alert("Logged out!"); setIsProfileOpen(false); }} className="bg-red-700 hover:bg-red-800 px-4 py-1.5 text-black rounded-full text-xs font-semibold">LOGOUT</button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { FiSearch } from "react-icons/fi";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { usePathname } from "next/navigation";

// // Type untuk produk
// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
//   description?: string;
//   category: {
//     id: "120" | "121";
//     name: "food" | "drink";
//   };
// }

// export default function Menu() {
//   // State untuk navigasi
//   const [selectedNav, setSelectedNav] = useState<"home" | "about" | "katalog" | "contact">("katalog");
//   // State untuk filter produk
//   const [selectedCategory, setSelectedCategory] = useState<"food" | "drink" | null>(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isProfileOpen, setIsProfileOpen] = useState(false);
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const router = useRouter();

//   const productsPerPage = 4;

//   // Set navigasi aktif berdasarkan rute
//   useEffect(() => {
//     const path = usePathname;
//     if (path === "/home") setSelectedNav("home");
//     else if (path === "/about") setSelectedNav("about");
//     else if (path === "/katalog") setSelectedNav("katalog");
//     else if (path === "/contact") setSelectedNav("contact");
//   }, [usePathname]);

//   // Fetch produk
//   useEffect(() => {
//     fetch("/api/products")
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to fetch products");
//         return res.json();
//       })
//       .then((data: Product[]) => {
//         const filtered = data.filter(
//           (product) => product.category.name === "food" || product.category.name === "drink"
//         );
//         setProducts(filtered);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   const allProducts = selectedCategory === null
//     ? products
//     : products.filter((product) => product.category.name === selectedCategory);

//   const filteredProducts = allProducts.filter((product) =>
//     product.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
//   const startIndex = (currentPage - 1) * productsPerPage;
//   const visibleProducts = searchQuery
//     ? filteredProducts
//     : filteredProducts.slice(startIndex, startIndex + productsPerPage);

//   const handleCategoryChange = (category: "food" | "drink" | null) => {
//     setSelectedCategory(category);
//     setCurrentPage(1);
//   };

//   const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter") {
//       setCurrentPage(1);
//     }
//   };

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const [selectedProductDetail, setSelectedProductDetail] = useState<Product | null>(null);

//   return (
//     <div
//       className="relative min-h-screen text-white flex flex-col items-center"
//       style={{ boxShadow: "0 0 30px #B8860B" }}
//     >
//       {/* Navbar */}
//       <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white py-6 flex justify-center text-lg font-semibold z-50">
//         <div className="absolute left-6">
//           <Image
//             src="/profil.jpg"
//             alt="Profile Picture"
//             width={40}
//             height={40}
//             className="rounded-full border-2 border-gray-800 cursor-pointer"
//             onClick={() => setIsProfileOpen(true)}
//           />
//         </div>

//         {/* Menu */}
//         <ul className="flex space-x-8" style={{ fontFamily: "Nosifer" }}>
//           <li>
//             <Link
//               href="/home"
//               onClick={() => setSelectedNav("home")}
//               className={`cursor-pointer ${
//                 selectedNav === "home" ? "text-orange-500 font-bold" : "text-white"
//               } hover:text-orange-500 transition duration-300`}
//             >
//               HOME
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/about"
//               onClick={() => setSelectedNav("about")}
//               className={`cursor-pointer ${
//                 selectedNav === "about" ? "text-orange-500 font-bold" : "text-white"
//               } hover:text-orange-500 transition duration-300`}
//             >
//               ABOUT
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/katalog"
//               onClick={() => setSelectedNav("katalog")}
//               className={`cursor-pointer ${
//                 selectedNav === "katalog" ? "text-orange-500 font-bold" : "text-white"
//               } hover:text-orange-500 transition duration-300`}
//             >
//               KATALOG
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/contact"
//               onClick={() => setSelectedNav("contact")}
//               className={`cursor-pointer ${
//                 selectedNav === "contact" ? "text-orange-500 font-bold" : "text-white"
//               } hover:text-orange-500 transition duration-300`}
//             >
//               CONTACT
//             </Link>
//           </li>
//         </ul>
//       </nav>

//       {/* Konten Utama */}
//       <div className="min-h-screen p-10 text-white mt-24 w-full">
//         <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-8">
//           <div
//             className="text-lg flex space-x-4 mb-4 md:mb-0"
//             style={{ fontFamily: "Lacquer, cursive", fontSize: "40px" }}
//           >
//             <button
//               className={`cursor-pointer ${
//                 selectedCategory === "food" ? "text-red-800 font-bold" : "text-white"
//               } hover:text-red-800 transition duration-300`}
//               onClick={() => handleCategoryChange("food")}
//               style={{
//                 textShadow: "2px 2px 4px rgba(255, 69, 0, 0.7)",
//                 fontFamily: "Nosifer",
//               }}
//             >
//               Food
//             </button>
//             <span className="text-gray-400">|</span>
//             <button
//               className={`cursor-pointer ${
//                 selectedCategory === "drink" ? "text-red-800 font-bold" : "text-white"
//               } hover:text-red-800 transition duration-300`}
//               onClick={() => handleCategoryChange("drink")}
//               style={{
//                 textShadow: "2px 2px 4px rgba(255, 69, 0, 0.7)",
//                 fontFamily: "Nosifer",
//               }}
//             >
//               Drink
//             </button>
//           </div>

//           {/* Pencarian */}
//           <div className="flex justify-end w-full md:w-auto">
//             <div className="relative w-[320px] flex items-center">
//               <input
//                 type="text"
//                 placeholder="Search products........"
//                 className="w-full h-[40px] pl-12 bg-white rounded-full shadow-lg text-lg outline-none"
//                 style={{ fontFamily: "'Chilanka', cursive", color: "#8FAFBC", fontSize: "15px" }}
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 onKeyDown={handleSearch}
//               />
//               {!searchQuery && (
//                 <FiSearch
//                   className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
//                   size={20}
//                 />
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Grid Produk */}
//         <div className="grid grid-cols-2 gap-x-4 gap-y-6 justify-items-center">
//           {visibleProducts.map((product) => (
//             <div
//               key={product.id}
//               className="text-center relative cursor-pointer"
//               onClick={() => setSelectedProductDetail(product)}
//             >
//               <div
//                 className="bg-black bg-opacity-40 p-4 rounded-lg flex flex-col"
//                 style={{ width: "300px", height: "300px", boxShadow: "0 6px 15px rgba(184, 134, 11, 0.6)" }}
//               >
//                 <div className="relative w-full h-full">
//                   <Image src={product.image} alt={product.name} fill className="object-cover" />
//                 </div>
//               </div>
//               <div className="mt-4" style={{ width: "300px" }}>
//                 <h2
//                   className="bg-gray-900 text-center py-2 rounded-2xl text-lg break-words"
//                   style={{ fontFamily: "'Chilanka', cursive", color: "#8FAFBC" }}
//                 >
//                   {product.name}
//                 </h2>
//                 <p className="text-lg" style={{ fontFamily: "'Chilanka', cursive", color: "#8FAFBC" }}>
//                   Rp. {product.price.toLocaleString()}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Pagination */}
//         {totalPages > 1 && (
//           <div className="mt-10 flex justify-center space-x-2">
//             <button
//               onClick={() => handlePageChange(currentPage - 1)}
//               disabled={currentPage === 1}
//               className={`px-4 py-2 rounded-full ${
//                 currentPage === 1 ? "bg-gray-600 cursor-not-allowed" : "bg-orange-500 hover:bg-orange-600"
//               } text-white font-semibold transition`}
//               style={{ fontFamily: "'Chilanka', cursive" }}
//             >
//               Previous
//             </button>
//             {Array.from({ length: totalPages }, (_, index) => (
//               <button
//                 key={index + 1}
//                 onClick={() => handlePageChange(index + 1)}
//                 className={`px-4 py-2 rounded-full ${
//                   currentPage === index + 1 ? "bg-orange-500" : "bg-gray-700 hover:bg-gray-600"
//                 } text-white font-semibold transition`}
//                 style={{ fontFamily: "'Chilanka', cursive" }}
//               >
//                 {index + 1}
//               </button>
//             ))}
//             <button
//               onClick={() => handlePageChange(currentPage + 1)}
//               disabled={currentPage === totalPages}
//               className={`px-4 py-2 rounded-full ${
//                 currentPage === totalPages ? "bg-gray-600 cursor-not-allowed" : "bg-orange-500 hover:bg-orange-600"
//               } text-white font-semibold transition`}
//               style={{ fontFamily: "'Chilanka', cursive" }}
//             >
//               Next
//             </button>
//           </div>
//         )}

//         {/* Detail Produk */}
//         {selectedProductDetail && (
//           <div className="fixed inset-0 bg-black bg-opacity-70 z-[1000] flex items-center justify-center px-4">
//             <div
//               className="bg-[#0E1A2B] rounded-xl max-w-md w-full p-6 relative text-white shadow-lg"
//               style={{ boxShadow: "0 0 15px #B8860B" }}
//             >
//               <button
//                 onClick={() => setSelectedProductDetail(null)}
//                 className="absolute top-2 right-4 text-2xl font-bold text-gray-300 hover:text-white"
//               >
//                 ✕
//               </button>
//               <Image
//                 src={selectedProductDetail.image}
//                 alt={selectedProductDetail.name}
//                 width={400}
//                 height={250}
//                 className="rounded-lg mb-4 object-cover w-full h-64"
//               />
//               <h2
//                 className="text-xl font-bold mb-2"
//                 style={{
//                   fontFamily: "'Nosifer', cursive",
//                 }}
//               >
//                 {selectedProductDetail.name}
//               </h2>
//               <p
//                 className="mb-2 text-lg text-[#8FAFBC]"
//                 style={{ fontFamily: "'Chilanka', cursive" }}
//               >
//                 Rp. {selectedProductDetail.price.toLocaleString()}
//               </p>
//               {selectedProductDetail.description && (
//                 <p
//                   className="text-sm text-[#A0AEC0]"
//                   style={{ fontFamily: "'Chilanka', cursive" }}
//                 >
//                   {selectedProductDetail.description}
//                 </p>
//               )}
//             </div>
//           </div>
//         )}

//         {/* Dropdown Profile */}
//         {isProfileOpen && (
//           <div
//             className="fixed top-[90px] left-6 bg-[#0E1A2B] text-white rounded-xl shadow-lg px-6 w-80 z-[999]"
//             style={{ boxShadow: "0 0 10px #B8860B" }}
//           >
//             <button
//               onClick={() => setIsProfileOpen(false)}
//               className="absolute top-2 right-2 text-3xl font-bold text-gray-300 hover:text-white"
//             >
//               ✕
//             </button>
//             <div className="flex flex-col items-center mt-6">
//               <Image
//                 src="/profil.jpg"
//                 alt="Profile Picture"
//                 width={70}
//                 height={70}
//                 className="rounded-full border-4 border-yellow-600 mb-3"
//               />
//               <h2 style={{ fontFamily: "'Chilanka', cursive", fontSize: "24px", color: "#8FAFBC" }}>
//                 Marklee
//               </h2>
//               <p className="text-sm mb-4" style={{ color: "#8FAFBC" }}>
//                 2312311@gmail.com
//               </p>
//               <div className="mt-2 mb-4">
//                 <button
//                   onClick={() => {
//                     localStorage.removeItem("userToken");
//                     setIsProfileOpen(false);
//                     alert("Logged out!");
//                     router.push("/auth/login");
//                   }}
//                   className="bg-red-700 hover:bg-red-800 px-4 py-1.5 text-black rounded-full text-xs font-semibold"
//                 >
//                   LOGOUT
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Type untuk produk
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
  category: {
    id: "120" | "121";
    name: "food" | "drink";
  };
}

// Tambahkan prop activeNav
interface MenuProps {
  activeNav: "home" | "about" | "katalog" | "contact";
}

export default function Menu({ activeNav }: MenuProps) {
  // Gunakan activeNav dari props sebagai nilai awal
  const [selectedNav, setSelectedNav] = useState<"home" | "about" | "katalog" | "contact">(activeNav);
  const [selectedCategory, setSelectedCategory] = useState<"food" | "drink" | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const productsPerPage = 4;

  // Fetch produk (tetap sama)
  useEffect(() => {
    fetch("/api/products")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data: Product[]) => {
        const filtered = data.filter(
          (product) => product.category.name === "food" || product.category.name === "drink"
        );
        setProducts(filtered);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const allProducts = selectedCategory === null
    ? products
    : products.filter((product) => product.category.name === selectedCategory);

  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const visibleProducts = searchQuery
    ? filteredProducts
    : filteredProducts.slice(startIndex, startIndex + productsPerPage);

  const handleCategoryChange = (category: "food" | "drink" | null) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setCurrentPage(1);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [selectedProductDetail, setSelectedProductDetail] = useState<Product | null>(null);

  return (
    <div
      className="relative min-h-screen text-white flex flex-col items-center"
      style={{ boxShadow: "0 0 30px #B8860B" }}
    >
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white py-6 flex justify-center text-lg font-semibold z-50">
        <div className="absolute left-6">
          <Image
            src="/profil.jpg"
            alt="Profile Picture"
            width={40}
            height={40}
            className="rounded-full border-2 border-gray-800 cursor-pointer"
            onClick={() => setIsProfileOpen(true)}
          />
        </div>

        {/* Menu */}
        <ul className="flex space-x-8" style={{ fontFamily: "Nosifer" }}>
          <li>
            <Link
              href="/home"
              onClick={() => setSelectedNav("home")}
              className={`cursor-pointer ${
                selectedNav === "home" ? "text-orange-500 font-bold" : "text-white"
              } hover:text-orange-500 transition duration-300`}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              onClick={() => setSelectedNav("about")}
              className={`cursor-pointer ${
                selectedNav === "about" ? "text-orange-500 font-bold" : "text-white"
              } hover:text-orange-500 transition duration-300`}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              href="/katalog"
              onClick={() => setSelectedNav("katalog")}
              className={`cursor-pointer ${
                selectedNav === "katalog" ? "text-orange-500 font-bold" : "text-white"
              } hover:text-orange-500 transition duration-300`}
            >
              KATALOG
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              onClick={() => setSelectedNav("contact")}
              className={`cursor-pointer ${
                selectedNav === "contact" ? "text-orange-500 font-bold" : "text-white"
              } hover:text-orange-500 transition duration-300`}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>

      {/* Konten Utama */}
      <div className="min-h-screen p-10 text-white mt-24 w-full">
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-8">
          <div
            className="text-lg flex space-x-4 mb-4 md:mb-0"
            style={{ fontFamily: "Lacquer, cursive", fontSize: "40px" }}
          >
            <button
              className={`cursor-pointer ${
                selectedCategory === "food" ? "text-red-800 font-bold" : "text-white"
              } hover:text-red-800 transition duration-300`}
              onClick={() => handleCategoryChange("food")}
              style={{
                textShadow: "2px 2px 4px rgba(255, 69, 0, 0.7)",
                fontFamily: "Nosifer",
              }}
            >
              Food
            </button>
            <span className="text-gray-400">|</span>
            <button
              className={`cursor-pointer ${
                selectedCategory === "drink" ? "text-red-800 font-bold" : "text-white"
              } hover:text-red-800 transition duration-300`}
              onClick={() => handleCategoryChange("drink")}
              style={{
                textShadow: "2px 2px 4px rgba(255, 69, 0, 0.7)",
                fontFamily: "Nosifer",
              }}
            >
              Drink
            </button>
          </div>

          {/* Pencarian */}
          <div className="flex justify-end w-full md:w-auto">
            <div className="relative w-[320px] flex items-center">
              <input
                type="text"
                placeholder="Search products........"
                className="w-full h-[40px] pl-12 bg-white rounded-full shadow-lg text-lg outline-none"
                style={{ fontFamily: "'Chilanka', cursive", color: "#8FAFBC", fontSize: "15px" }}
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

        {/* Grid Produk */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 justify-items-center">
          {visibleProducts.map((product) => (
            <div
              key={product.id}
              className="text-center relative cursor-pointer"
              onClick={() => setSelectedProductDetail(product)}
            >
              <div
                className="bg-black bg-opacity-40 p-4 rounded-lg flex flex-col"
                style={{ width: "300px", height: "300px", boxShadow: "0 6px 15px rgba(184, 134, 11, 0.6)" }}
              >
                <div className="relative w-full h-full">
                  <Image src={product.image} alt={product.name} fill className="object-cover" />
                </div>
              </div>
              <div className="mt-4" style={{ width: "300px" }}>
                <h2
                  className="bg-gray-900 text-center py-2 rounded-2xl text-lg break-words"
                  style={{ fontFamily: "'Chilanka', cursive", color: "#8FAFBC" }}
                >
                  {product.name}
                </h2>
                <p className="text-lg" style={{ fontFamily: "'Chilanka', cursive", color: "#8FAFBC" }}>
                  Rp. {product.price.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-10 flex justify-center space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-full ${
                currentPage === 1 ? "bg-gray-600 cursor-not-allowed" : "bg-orange-500 hover:bg-orange-600"
              } text-white font-semibold transition`}
              style={{ fontFamily: "'Chilanka', cursive" }}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 rounded-full ${
                  currentPage === index + 1 ? "bg-orange-500" : "bg-gray-700 hover:bg-gray-600"
                } text-white font-semibold transition`}
                style={{ fontFamily: "'Chilanka', cursive" }}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-full ${
                currentPage === totalPages ? "bg-gray-600 cursor-not-allowed" : "bg-orange-500 hover:bg-orange-600"
              } text-white font-semibold transition`}
              style={{ fontFamily: "'Chilanka', cursive" }}
            >
              Next
            </button>
          </div>
        )}

        {/* Detail Produk */}
        {selectedProductDetail && (
          <div className="fixed inset-0 bg-black bg-opacity-70 z-[1000] flex items-center justify-center px-4">
            <div
              className="bg-[#0E1A2B] rounded-xl max-w-md w-full p-6 relative text-white shadow-lg"
              style={{ boxShadow: "0 0 15px #B8860B" }}
            >
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
              <h2
                className="text-xl font-bold mb-2"
                style={{
                  fontFamily: "'Nosifer', cursive",
                }}
              >
                {selectedProductDetail.name}
              </h2>
              <p
                className="mb-2 text-lg text-[#8FAFBC]"
                style={{ fontFamily: "'Chilanka', cursive" }}
              >
                Rp. {selectedProductDetail.price.toLocaleString()}
              </p>
              {selectedProductDetail.description && (
                <p
                  className="text-sm text-[#A0AEC0]"
                  style={{ fontFamily: "'Chilanka', cursive" }}
                >
                  {selectedProductDetail.description}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Dropdown Profile */}
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
              <h2 style={{ fontFamily: "'Chilanka', cursive", fontSize: "24px", color: "#8FAFBC" }}>
                Marklee
              </h2>
              <p className="text-sm mb-4" style={{ color: "#8FAFBC" }}>
                2312311@gmail.com
              </p>
              <div className="mt-2 mb-4">
                <button
                  onClick={() => {
                    localStorage.removeItem("userToken");
                    setIsProfileOpen(false);
                    alert("Logged out!");
                    router.push("/auth/login");
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
