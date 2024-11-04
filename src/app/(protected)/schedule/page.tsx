import Navigation from "@/components/navigation";
import ScheduleCard from "@/components/card/schedule-card";

const Schedule = () => {
  return (
    // <Navigation />
    <div className="flex flex-col justify-center items-center space-y-4 w-full">
      <div className="space-y-4">
        <p className="text-[36px] text-brand-5 text-center font-[700]">
          Pilih Jadwal Keberangkatan
        </p>
        <div className="space-y-4">
          <div className="flex space-x-4">
            <input
              className="border-b bg-transparent text-[14px] text-[#808080] py-4 w-full outline-none"
              placeholder="Bandung, Indonesia"
            />
            <input
              className="border-b bg-transparent text-[14px] text-[#808080] py-4 w-full outline-none"
              placeholder="Jakarta, Indonesia"
            />
          </div>
          <input
            type="date"
            className="border-b bg-transparent text-[14px] text-[#808080] py-4 w-full outline-none"
            placeholder="Jakarta, Indonesia"
          />
        </div>
        <button className="bg-brand-6 text-[14px] font-[600] text-white py-4 w-full outline-none rounded-lg">
          Cari Kereta
        </button>
      </div>
      <div className="flex flex-col justify-center space-y-6 pt-6">
        <p className="text-[36px] text-[#202020] text-center font-[500]">
          Kereta Yang Tersedia
        </p>
        <div className="bg-[#808080] w-full h-0.5"></div>
        <div className="space-y-4">
          <ScheduleCard />
          <ScheduleCard />
          <ScheduleCard />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
