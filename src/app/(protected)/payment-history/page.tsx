import { getPaymentHistory } from "@/action/order";
import PaymentHistoryCard from "@/components/card/payment-history";

const PaymentHistory = async () => {
  const historyList = await getPaymentHistory();

  return (
    <div className="flex flex-col justify-center items-center space-y-4 w-full">
      <div className="flex flex-col justify-center space-y-6 pt-6">
        <p className="text-[36px] text-brand-5 text-center font-[700]">
          Riwayat Pemesanan
        </p>
        <div className="space-y-4">
          {historyList?.map((el, index) => (
            <PaymentHistoryCard key={index} history={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
