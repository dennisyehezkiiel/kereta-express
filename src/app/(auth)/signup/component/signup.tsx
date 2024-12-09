"use client";

import { userSignup } from "@/action/authentication";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignupComponent = () => {
  const { push } = useRouter();
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    const response = await userSignup(formValue.email, formValue.password);
    
    if (!response.error) {
      push("/login");
    }
  };

  return (
    <div className="flex items-center w-full h-screen max-w-[80%]">
      <div className="flex flex-col justify-center w-[480px] bg-white/50 rounded-lg p-4 space-y-4">
        <span className="text-[30px] text-center text-black font-semibold">
          Daftar Akun
        </span>
        <div className="bg-white p-4 space-y-4 rounded-lg">
          <div className="flex flex-col space-y-2 rounded-lg">
            <span className="text-[16px] text-black">Nama</span>
            <input
              type="text"
              value={formValue.name}
              onChange={(e) =>
                setFormValue((formValue) => ({
                  ...formValue,
                  ["name"]: e.target.value,
                }))
              }
              placeholder="Isi nama lengkap anda"
              className="text-gray-400 border rounded-lg p-3 outline-none"
            />
          </div>
          <div className="flex flex-col space-y-2 rounded-lg">
            <span className="text-[16px] text-black">Email</span>
            <input
              type="email"
              value={formValue.email}
              onChange={(e) =>
                setFormValue((formValue) => ({
                  ...formValue,
                  ["email"]: e.target.value,
                }))
              }
              placeholder="Isi email anda"
              className="text-gray-400 border rounded-lg p-3 outline-none"
            />
          </div>
          <div className="flex flex-col space-y-2 rounded-lg">
            <span className="text-[16px] text-black">Kata Sandi</span>
            <input
              type="password"
              value={formValue.password}
              onChange={(e) =>
                setFormValue((formValue) => ({
                  ...formValue,
                  ["password"]: e.target.value,
                }))
              }
              placeholder="Isi kata sandi anda"
              className="text-gray-400 border rounded-lg p-3 outline-none"
            />
          </div>
          <button
            className="bg-brand-6 rounded-lg py-3 w-full"
            onClick={handleSubmit}
          >
            Masuk
          </button>
          <div className="flex justify-start flex-col space-y-1 w-full">
            <button className="text-start text-[14px] text-black underline underline-offset-4">
              Belum punya akun?
            </button>
            <button className="text-start text-[14px] text-black underline underline-offset-4">
              Lupa kata sandi?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupComponent;
