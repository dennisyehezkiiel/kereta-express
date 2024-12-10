import PaymentCard from "@/components/card/payment-card";
import { ParamProps } from "@/interface/type";
import { getOrderDetail } from "@/action/order";
import { formatToRupiah } from "@/lib/formatter";
import UploadPayment from "./_component/payment-upload";

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
      <UploadPayment searchParams={searchParams} />
    </div>
  );
};

export default Payment;
