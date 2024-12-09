
import { getSchedule } from "@/action/schedule";
import ScheduleCard from "@/components/card/schedule-card";
import { ParamProps } from "@/interface/type";
import SearchForm from "./component/search-form";

const Schedule = async ({ searchParams }: ParamProps) => {
  const from = searchParams?.from || ""
  const dest = searchParams?.dest || ""
  const schedule = await getSchedule(from, dest)
  
  return (
    // <Navigation />
    <div className="flex flex-col justify-center items-center space-y-4 w-full">
      <div className="space-y-4">
        <p className="text-[36px] text-brand-5 text-center font-[600]">
          Pilih Jadwal Keberangkatan
        </p>
       <SearchForm />
      </div>
      <div className="flex flex-col justify-center space-y-6 pt-6">
        <p className="text-[36px] text-[#202020] text-center font-[500]">
          Kereta Yang Tersedia
        </p>
        <div className="bg-[#808080] w-full h-0.5"></div>
        <div className="space-y-4">
          {schedule?.map((el, index) => (
            <ScheduleCard key={index} schedule={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
