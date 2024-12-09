"use client";

import { forgotPasswordEmail } from "@/action/authentication";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Toastify from "toastify-js";

const ForgetPasswordComponent = () => {
  const { push } = useRouter();
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    const response = await forgotPasswordEmail(formValue.email);

    if (!response.error) {
      Toastify({
        text: "Berhasil mengirimkan link ubah password ke email anda",
        className: "info",
      }).showToast();
    }
  };

  return (
    <div className="flex items-center w-full h-screen max-w-[80%]">
      <div className="flex flex-col justify-center w-[480px] bg-white/50 rounded-lg p-4 space-y-4">
        <span className="text-[30px] text-center text-black font-semibold">
          Lupa Sandi
        </span>
        <div className="bg-white p-4 space-y-4 rounded-lg">
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
          <div className="flex space-x-2">
            <button
              className="border border-gray-400 text-black rounded-lg py-3 w-full"
              onClick={() => push("/login")}
            >
              Batalkan
            </button>
            <button
              className="bg-brand-6 rounded-lg py-3 w-full"
              onClick={handleSubmit}
            >
              Reset Kata Sandi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordComponent;
