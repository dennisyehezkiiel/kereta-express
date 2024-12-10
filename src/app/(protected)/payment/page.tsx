import { BsBank } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa6";
import PaymentCard from "@/components/card/payment-card";
import { LuWallet } from "react-icons/lu";
import { ParamProps } from "@/interface/type";
import { getOrderDetail } from "@/action/order";
import { formatToRupiah } from "@/lib/formatter";

const Payment = async ({ searchParams }: ParamProps) => {
  const orderDetail = await getOrderDetail(searchParams.orderId);

  return (
    <div className="flex flex-col justify-center items-center space-y-4 w-full">
      <div className="flex flex-col justify-center space-y-6 pt-3">
        <div className="flex space-x-1">
          <span className="text-[36px] text-brand-5 text-center font-[600]">
            {`Total harga`}
          </span>
          <span className="text-[36px] text-[#FF6060] text-center font-[600]">
            {formatToRupiah(orderDetail?.[0]?.id_jadwal_keberangkatan?.harga)}
          </span>
          <span className="text-[36px] text-brand-5 text-center font-[600]">
            {`yang harus dibayarkan`}
          </span>
        </div>
        <PaymentCard orderDetail={orderDetail?.[0]} />
      </div>
      <div className="flex flex-col justify-start w-[900px] space-y-3">
        <p className="text-[#202020] font-[500]">Pilih Jenis Pembayaran</p>
        <div className="space-y-4 w-full">
          <button className="flex justify-between items-center bg-white border rounded-lg p-3 w-full">
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
          <button className="flex justify-between items-center bg-white border rounded-lg p-3 w-full">
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
    </div>
  );
};

export default Payment;
