"use client";


import { useRouter } from "next/navigation";
import { FaGoogle, FaGithub, FaFacebook, FaCheck, FaInstagram } from "react-icons/fa";
import { toast } from "react-toastify";


const SocialAuth = () => {
    const router = useRouter();


    const handleSocialLogin = (provider: string) => {
        toast.info(`${provider} Login Berhasil!`, {
            position: "top-right",
            icon: <FaCheck className="text-green-400" />,
        });


        // Simulasi login sosial, langsung redirect ke dashboard
        setTimeout(() => {
            router.push("/dashboard");
        }, 1000); // Tunggu sebentar agar toast muncul dulu
    };


    return (
        <div className="space-y-4 mt-6"> {/* Tambah margin-top agar agak jauh dari tombol login */}
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-500"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-gray-900 text-gray-300">
                        Atau Masuk Dengan
                    </span>
                </div>
            </div>


            <div className="flex space-x-4 justify-center">
                <button
                    onClick={() => handleSocialLogin("Google")}
                    className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors border border-gray-400"
                >
                    <FaGoogle className="text-xl text-red-600" />
                </button>
                <button
                    onClick={() => handleSocialLogin("Instagram")}
                    className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors border border-gray-400"
                >
                    <FaInstagram className="text-xl text-pink-600" />
                </button>
                <button
                    onClick={() => handleSocialLogin("Facebook")}
                    className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors border border-gray-400"
                >
                    <FaFacebook className="text-xl text-blue-600" />
                </button>
            </div>
        </div>
    );
};


export default SocialAuth;