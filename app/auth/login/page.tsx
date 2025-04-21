"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash, FaCheck } from "react-icons/fa";
import Link from "next/link";
import { toast } from 'react-toastify';
import SocialAuth from "@/app/components/SocialAuth";
import { lacquer, chilanka } from "@/app/ui/fonts";

const LoginPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = () => {
    const newErrors = { email: "", password: "" };

    if (!formData.email.trim()) {
      newErrors.email = "Email tidak boleh kosong";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password tidak boleh kosong";
    }

    if (formData.email.trim() && formData.password.trim()) {
      if (formData.email !== "user123") {
        newErrors.email = "Email salah";
      }
      if (formData.password !== "12345") {
        newErrors.password = "Password salah";
      }
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((err) => err === "");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  

  const handleLogin = () => {
    if (validateForm()) {
      toast.success("Login Berhasil!", {
        position: "top-right",
        icon: <FaCheck className="text-green-400" />,
      });
      router.push("/home");
    }
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gray-900">
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline>
        <source src="/latar.mp4" type="video/mp4" />
        Browser Anda tidak mendukung video tag.
      </video>

      <div className="relative z-10 bg-gray-900 text-gray-200 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-5xl font-bold text-center mb-6" style={{ fontFamily: "'lacquer', cursive" }}>Login</h2>

        <div className="mb-4">
          <label className="block text-sm font-semibold">Username</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Masukkan Username..."
            className="w-full mt-1 p-3 rounded bg-white-800 text-black border border-orange-600"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div className="mb-4 relative">
          <label className="block text-sm font-semibold">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Masukkan Password..."
            className="w-full mt-1 p-3 rounded bg-white-800 text-black border border-orange-600 pr-10"
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-9 text-gray-400">
            {showPassword ? <FaEye />:<FaEyeSlash /> }
          </button>
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        <div className="flex justify-between text-sm mb-4">
          <span></span>
          <a href="/auth/forgot" className="text-gray-300 hover:underline">Lupa Password?</a>
        </div>

        <button onClick={handleLogin} className="w-full bg-orange-500 text-white py-3 rounded text-lg font-semibold hover:bg-orange-600">
          Login
        </button>

        <SocialAuth />

        <p className="mt-6 text-center text-sm text-gray-600">
          Tidak punya akun? <Link href="/auth/register" className="text-orange-500 hover:text-orange-600 font-semibold">Daftar</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;