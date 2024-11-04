const SelectedTicket = () => {
  return (
    <>
      <div className="bg-brand-1 rounded-lg w-[900px] p-6 space-y-3">
        <p className="text-[#202020] text-[20px] font-[500]">
          Detail Keberangkatan
        </p>
        <div className="flex justify-between">
          <div>
            <p className="text-[#202020] font-[600]">Serayu 255</p>
            <p className="text-[#202020] font-[600]">PT KAI</p>
          </div>
          <p className="text-brand-5 font-[500]">Ekonomi</p>
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
      </div>
    </>
  );
};

export default SelectedTicket;
