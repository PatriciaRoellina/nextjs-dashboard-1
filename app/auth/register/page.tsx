"use client";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle, FaInstagram, FaFacebook, FaCheck } from "react-icons/fa";
import Link from "next/link";
import { toast } from 'react-toastify';
import SocialAuth from "@/app/components/SocialAuth";
import { lacquer, chilanka } from "@/app/ui/fonts";


const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false); 
  const handelSocialLogin = (provider: string) => {
    toast.info(`${provider} Login Berhasil!`, {
        position: 'top-right',
        icon: <FaCheck className="text-green-400" />
    });
};



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


      {/* Login Card */}
      <div className="relative z-10 bg-gray-900 text-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-5xl font-bold text-center mb-6" style={{ fontFamily: "'lacquer', cursive" }}>
          Register
        </h2>


        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-sm font-semibold">Email</label>
          <input
            type="email"
            placeholder="Masukkan Email..."
            className="w-full mt-1 p-3 rounded bg-white-800 text-white border border-orange-400"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-sm font-semibold">Username</label>
          <input
            type="email"
            placeholder="Masukkan Username..."
            className="w-full mt-1 p-3 rounded bg-white-800 text-white border border-orange-400"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4 relative">
          <label className="block text-sm font-semibold">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Masukkan Password..."
            className="w-full mt-1 p-3 rounded bg-white-800 text-white border border-orange-400 pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-9 text-gray-400"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {/* Password Input */}
        <div className="mb-4 relative">
          <label className="block text-sm font-semibold">Confirm Password</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Masukkan Confirm Password..."
            className="w-full mt-1 p-3 rounded bg-white-800 text-white border border-orange-400 pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-9 text-gray-400"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>


        {/* Login Button */}
        <button className="w-full bg-orange-500 text-white py-3 rounded text-lg font-semibold hover:bg-orange-600">
          REGISTER
        </button>

        <p className="mt-6 text-center text-sm text-gray-600">
          Sudah punya akun?{" "}
          <Link
            href="/auth/login"
            className="text-orange-500 hover:text-orange-600 font-semibold"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;