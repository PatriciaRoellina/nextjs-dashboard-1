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
    <div 
    className="relative flex justify-center items-center min-h-screen bg-gray-900"
    style={{ background: "linear-gradient(to bottom, #200632, #831D27, #BC1F28, #E6341A, #F67706)" }}
    >

      {/* Login Card */}
      <div className="relative z-10 bg-gray-900 bg text-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center mb-6" style={{ fontFamily: "'lacquer', cursive" }}>
          LUPA PASSWORD?
        </h2>


        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-sm font-semibold">Email</label>
          <input
            type="email"
            placeholder="Masukkan Email..."
            className="w-full mt-1 p-3 rounded bg-gray-800 text-white border border-gray-600"
          />
        </div>

        <label className="block text-sm">Masukkan Email untuk reset Password</label>

        {/* Login Button */}
        <button className="w-full bg-orange-500 text-white py-3 rounded text-lg font-semibold hover:bg-orange-600">
          Kirim
        </button>


        <p className="mt-6 text-center text-sm text-gray-600">
          <Link
            href="/auth/login"
            className="text-yellow-100 font-semibold"
          >
            Kembali Ke Halaman Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default LoginPage;