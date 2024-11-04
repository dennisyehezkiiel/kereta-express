const PaymentHistoryCard = () => {
  return (
    <>
      <div className="bg-white rounded-lg w-[900px] p-6 space-y-3">
        <div className="flex justify-center">
          <p className="text-[#202020] font-[500]">
            Transaction ID: 351511859256378
          </p>
        </div>
        <div>
          <p className="text-[#202020] text-[20px] font-[600]">Serayu 255</p>
          <p className="text-[#202020] text-[20px] font-[600]">PT KAI</p>
        </div>
        <div className="space-y-1">
          <p className="text-[#202020] text-[14px] font-[500]">
            Status Pembayaran
          </p>
          <p className="text-[#202020] text-[14px] font-[500] border border-brand-7 px-2 py-1 w-fit rounded-lg">
            Sudah dibayar
          </p>
        </div>
        <div className="flex items-center space-x-12">
          <div>
            <p className="text-[#202020] font-[600]">16 Nov</p>
            <p className="text-[#202020] font-medium">00:55</p>
            <p className="text-[#202020] font-medium">Kiaracondong</p>
          </div>
          <div className="bg-[#808080] w-full h-0.5"></div>
          <div>
            <p className="text-[#202020] text-end font-[600]">16 Nov</p>
            <p className="text-[#202020] text-end font-medium">00:55</p>
            <p className="text-[#202020] text-end font-medium">Kiaracondong</p>
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-[#202020] text-[20px] font-[700]">Total Biaya</p>
          <p className="text-[#202020] text-[20px] font-[700]">Rp 200.000</p>
        </div>
        <div className="flex flex-col space-y-2">
          <button className="text-[#202020] text-[16px] font-[600] border border-brand-5 p-4 w-[290px] rounded-lg">
            Upload bukti pembayaran
          </button>
          <button className="text-white text-[16px] font-[600] border border-brand-5 bg-brand-5 p-4 w-[290px] rounded-lg">
            Download Tiket
          </button>
        </div>
      </div>
    </>
  );
};

export default PaymentHistoryCard;
