"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash, FaCheck } from "react-icons/fa";
import Link from "next/link";
import { toast } from 'react-toastify';
import SocialAuth from "@/app/components/SocialAuth";

const LoginPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", password: "" });
  const [errors, setErrors] = useState({ name: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");


  const validateForm = () => {
    const newErrors = { name: "", password: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Username tidak boleh kosong";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password tidak boleh kosong";
    }
    setErrors(newErrors);
    return Object.values(newErrors).every((err) => err === "");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
  const isValid = validateForm();
  if (!isValid) return;

  try {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json(); // Ini harus tetap dijalankan bahkan kalau res.ok === false

    if (res.ok && data.success) {
      localStorage.setItem("username", formData.name);
      toast.success("Login berhasil!", {
        position: "top-right",
        icon: <FaCheck className="text-green-400" />,
      });
      setLoginError("");
      router.push("/home");
    } else {
      setLoginError("Username atau Password salah");
      toast.error(data.message || "Gagal login", {
        position: "top-right",
      });
    }
  } catch (error) {
    toast.error("Terjadi kesalahan saat login", {
      position: "top-right",
    });
    console.error("Login error:", error);
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
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Masukkan Username..."
            className="w-full mt-1 p-3 rounded bg-white-800 text-black border border-orange-600"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
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
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        {loginError && (
          <div className="text-red-500 text-sm mt-4 text-left">
            {loginError}
          </div>
        )}

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
