import PaymentHistoryCard from "@/components/card/payment-history";

const PaymentHistory = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 w-full">
      <div className="flex flex-col justify-center space-y-6 pt-6">
        <p className="text-[36px] text-brand-5 text-center font-[700]">
          Riwayat Pemesanan
        </p>
        <div className="space-y-4">
          <PaymentHistoryCard />
          <PaymentHistoryCard />
          <PaymentHistoryCard />
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
