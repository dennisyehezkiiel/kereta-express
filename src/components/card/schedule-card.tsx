const ScheduleCard = () => {
  return (
    <>
      <div className="bg-white rounded-lg w-[900px] p-6 space-y-3">
        <div>
          <p className="text-[#202020] font-[600]">Serayu 255</p>
          <p className="text-[#202020] font-[600]">PT KAI</p>
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
        <div className="flex flex-col justify-center items-center p-6 bg-[#D0FFC8] rounded-lg space-y-2 w-fit">
          <p className="text-[#202020] font-[600]">Ekonomi</p>
          <div className="flex space-x-4">
            <p className="text-[#202020] font-[600]">Harga</p>
            <p className="text-[#202020] font-[600]">Rp 200.000</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduleCard;
