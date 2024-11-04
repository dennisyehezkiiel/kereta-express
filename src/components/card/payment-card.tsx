const PaymentCard = () => {
  return (
    <>
      <div className="bg-brand-2 rounded-lg w-[900px] p-6 space-y-6">
        <div className="flex justify-start">
          <p className="text-[#202020] font-[500]">Detail Keberangkatan</p>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-[#202020] font-[500]">Serayu 255</p>
            <p className="text-[#202020] font-[500]">PT KAI</p>
          </div>
          <p className="text-brand-4 font-[500]">Ekonomi</p>
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
        <div className="flex flex-col justify-between space-y-3">
          <p className="text-[#202020] text-[20px] font-[700]">
            Detail Penumpang
          </p>
          <div className="flex justify-between space-y-2">
            <p className="text-[#202020] text-end font-medium">
              Nama Penumpang
            </p>
            <p className="text-[#202020] text-end font-medium">Jenis Kelamin</p>
            <p className="text-[#202020] text-end font-medium">No KTP</p>
            <p className="text-[#202020] text-end font-medium">Tanggal Lahir</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentCard;
