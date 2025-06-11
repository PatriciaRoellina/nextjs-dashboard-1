// "use client";
// import { useState } from "react";
// import { FaEye, FaEyeSlash, FaCheck } from "react-icons/fa";
// import Link from "next/link";
// import { useForm, SubmitHandler } from "react-hook-form";
// import { toast } from 'react-toastify';
// import { lacquer } from "@/app/ui/fonts";

// type RegisterFormInputs = {
//   name: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
// };

// const RegisterPage = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const { register, handleSubmit, formState: { errors }, watch } = useForm<RegisterFormInputs>();
//   const password = watch("password");

//   const onSubmit: SubmitHandler<RegisterFormInputs> = async (data) => {
//     if (data.password !== data.confirmPassword) {
//       toast.error("Password dan konfirmasi password tidak cocok", {
//         position: 'top-right',
//       });
//       return;
//     }

//     try {
//       const response = await fetch('/api/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           name: data.name,
//           email: data.email,
//           password: data.password,
//         }),
//       });

//       const result = await response.json();
//       if (response.ok) {
//         toast.success("Registrasi berhasil! Silakan login.", {
//           position: 'top-right',
//           icon: <FaCheck className="text-green-400" />,
//         });
//       } else {
//         toast.error(result.error || "Gagal registrasi", {
//           position: 'top-right',
//         });
//       }
//     } catch (error) {
//       toast.error("Terjadi kesalahan saat registrasi", {
//         position: 'top-right',
//       });
//     }
//   };

//   return (
//     <div className="relative flex justify-center items-center min-h-screen bg-gray-900">
//       <video
//         className="absolute inset-0 w-full h-full object-cover"
//         autoPlay
//         loop
//         muted
//         playsInline
//       >
//         <source src="/latar.mp4" type="video/mp4" />
//         Browser Anda tidak mendukung video tag.
//       </video>

//       <div className="relative z-10 bg-gray-900 text-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-5xl font-bold text-center mb-6" style={{ fontFamily: lacquer.style.fontFamily }}>
//           Register
//         </h2>

//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="mb-4">
//             <label className="block text-sm font-semibold">Nama</label>
//             <input
//               type="text"
//               placeholder="Masukkan Nama..."
//               className="w-full mt-1 p-3 rounded bg-gray-800 text-white border border-orange-400"
//               {...register("name", { required: "Nama wajib diisi" })}
//             />
//             {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-semibold">Email</label>
//             <input
//               type="email"
//               placeholder="Masukkan Email..."
//               className="w-full mt-1 p-3 rounded bg-gray-800 text-white border border-orange-400"
//               {...register("email", {
//                 required: "Email wajib diisi",
//                 pattern: {
//                   value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//                   message: "Email tidak valid",
//                 },
//               })}
//             />
//             {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
//           </div>

//           <div className="mb-4 relative">
//             <label className="block text-sm font-semibold">Password</label>
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Masukkan Password..."
//               className="w-full mt-1 p-3 rounded bg-gray-800 text-white border border-orange-400 pr-10"
//               {...register("password", {
//                 required: "Password wajib diisi",
//                 minLength: { value: 6, message: "Password minimal 6 karakter" },
//               })}
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-3 top-9 text-gray-400"
//             >
//               {showPassword ? <FaEyeSlash /> : <FaEye />}
//             </button>
//             {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
//           </div>

//           <div className="mb-4 relative">
//             <label className="block text-sm font-semibold">Konfirmasi Password</label>
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Masukkan Konfirmasi Password..."
//               className="w-full mt-1 p-3 rounded bg-gray-800 text-white border border-orange-400 pr-10"
//               {...register("confirmPassword", { required: "Konfirmasi password wajib diisi" })}
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-3 top-9 text-gray-400"
//             >
//               {showPassword ? <FaEyeSlash /> : <FaEye />}
//             </button>
//             {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-orange-500 text-white py-3 rounded text-lg font-semibold hover:bg-orange-600"
//           >
//             REGISTER
//           </button>
//         </form>

//         <p className="mt-6 text-center text-sm text-gray-600">
//           Sudah punya akun?{" "}
//           <Link
//             href="/auth/login"
//             className="text-orange-500 hover:text-orange-600 font-semibold"
//           >
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;


"use client";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaCheck } from "react-icons/fa";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { lacquer } from "@/app/ui/fonts";
import { useRouter } from "next/navigation"; // ✅ Tambahan

type RegisterFormInputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState: { errors }, watch } = useForm<RegisterFormInputs>();
  const password = watch("password");
  const router = useRouter(); // ✅ Tambahan

  const onSubmit: SubmitHandler<RegisterFormInputs> = async (data) => {
    if (data.password !== data.confirmPassword) {
      toast.error("Password dan konfirmasi password tidak cocok", {
        position: "top-right",
      });
      return;
    }

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Registrasi berhasil! Silakan login.", {
          position: "top-right",
          icon: <FaCheck className="text-green-400" />,
        });

        // ✅ Redirect ke halaman login setelah 1.5 detik
        setTimeout(() => {
          router.push("/auth/login");
        }, 1500);
      } else {
        toast.error(result.error || "Gagal registrasi", {
          position: "top-right",
        });
      }
    } catch (error) {
      toast.error("Terjadi kesalahan saat registrasi", {
        position: "top-right",
      });
    }
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

      <div className="relative z-10 bg-gray-900 text-white p-8 rounded-lg shadow-lg w-96">
        <h2
          className="text-5xl font-bold text-center mb-6"
          style={{ fontFamily: lacquer.style.fontFamily }}
        >
          Register
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-semibold">Nama</label>
            <input
              type="text"
              placeholder="Masukkan Nama..."
              className="w-full mt-1 p-3 rounded bg-gray-800 text-white border border-orange-400"
              {...register("name", { required: "Nama wajib diisi" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold">Email</label>
            <input
              type="email"
              placeholder="Masukkan Email..."
              className="w-full mt-1 p-3 rounded bg-gray-800 text-white border border-orange-400"
              {...register("email", {
                required: "Email wajib diisi",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Email tidak valid",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-4 relative">
            <label className="block text-sm font-semibold">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Masukkan Password..."
              className="w-full mt-1 p-3 rounded bg-gray-800 text-white border border-orange-400 pr-10"
              {...register("password", {
                required: "Password wajib diisi",
                minLength: {
                  value: 6,
                  message: "Password minimal 6 karakter",
                },
              })}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-gray-400"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <div className="mb-4 relative">
            <label className="block text-sm font-semibold">Konfirmasi Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Masukkan Konfirmasi Password..."
              className="w-full mt-1 p-3 rounded bg-gray-800 text-white border border-orange-400 pr-10"
              {...register("confirmPassword", {
                required: "Konfirmasi password wajib diisi",
              })}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-gray-400"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded text-lg font-semibold hover:bg-orange-600"
          >
            REGISTER
          </button>
        </form>

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
};

export default RegisterPage;