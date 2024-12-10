"use client";

import { updateOrder } from "@/action/order";
import { getCurrentPayment, insertPayment } from "@/action/payment";
import { uploadImage } from "@/action/upload-file";
import { ParamProps } from "@/interface/type";
import { useRef, useState } from "react";
import { BsBank } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa6";
import { LuWallet } from "react-icons/lu";
import Toastify from "toastify-js";

const UploadPayment = ({ searchParams }: ParamProps) => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const responseUpload = await uploadImage(file!, "images");
    if (responseUpload) {
      const paymentRes = await insertPayment({
        paymentMethod: paymentMethod,
        paymentFile: responseUpload,
        status: "4789131d-116a-4395-a635-49c846170a60",
      });
      if (!paymentRes) {
        const currentPayment = await getCurrentPayment();
        const updateRes = await updateOrder(searchParams.orderId, {
          id_pembayaran: currentPayment?.[0]?.id_pembayaran,
          id_status: "4789131d-116a-4395-a635-49c846170a60",
        });

        Toastify({
          text: "Pembayaran berhasil",
          className: "info",
        }).showToast();
      }
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
            onClick={() => {
              setPaymentMethod("Transfer Bank");
              fileInputRef?.current?.click();
            }}
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
            onClick={() => {
              setPaymentMethod("Dompet Digital");
              fileInputRef?.current?.click();
            }}
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
