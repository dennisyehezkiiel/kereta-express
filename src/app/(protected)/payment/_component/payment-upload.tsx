"use client";

import { uploadImage } from "@/action/upload-file";
import { useRef } from "react";
import { BsBank } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa6";
import { LuWallet } from "react-icons/lu";
import Toastify from "toastify-js";

const UploadPayment = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const responseUpload = await uploadImage(file!, "images");
    if (responseUpload) {
      Toastify({
        text: "Berhasil mengupload bukti pembayaran",
        className: "info",
      }).showToast();
    }
  };

  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        onChange={handleChange}
      />
      <div className="flex flex-col justify-start w-[900px] space-y-3">
        <p className="text-[#202020] font-[500]">Pilih Jenis Pembayaran</p>
        <div className="space-y-4 w-full">
          <button
            onClick={() => fileInputRef?.current?.click()}
            className="flex justify-between items-center bg-white border rounded-lg p-3 w-full"
          >
            <div className="flex items-center space-x-3">
              <BsBank size={32} color="#202020" />
              <div className="flex flex-col justify-start items-start text-start">
                <span className="text-[#202020] text-end font-medium">
                  Transfer Bank
                </span>
                <span className="text-[12px] text-[#808080] font-medium">
                  Via Mandiri
                </span>
              </div>
            </div>
            <FaAngleRight color="#202020" />
          </button>
          <button
            onClick={() => fileInputRef?.current?.click()}
            className="flex justify-between items-center bg-white border rounded-lg p-3 w-full"
          >
            <div className="flex items-center space-x-3">
              <LuWallet size={32} color="#202020" />
              <div className="flex flex-col justify-start items-start text-start">
                <span className="text-[#202020] text-end font-medium">
                  Dompet Digital
                </span>
                <span className="text-[12px] text-[#808080] font-medium">
                  Via Dana
                </span>
              </div>
            </div>
            <FaAngleRight color="#202020" />
          </button>
        </div>
      </div>
    </>
  );
};

export default UploadPayment;
