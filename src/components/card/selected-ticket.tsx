import { Database } from "@/lib/database.type";
import dayjs from "dayjs";

const SelectedTicket = ({
  schedule,
}: {
  schedule: ScheduleList;
}) => {

  return (
    <>
      <div className="bg-brand-1 rounded-lg w-[900px] p-6 space-y-3">
        <p className="text-[#202020] text-[20px] font-[500]">
          Detail Keberangkatan
        </p>
        <div className="flex justify-between">
          <div>
            <p className="text-[#202020] font-[600]">{schedule?.id_kereta?.nama_kereta}</p>
            <p className="text-[#202020] font-[600]">{schedule.id_kereta.nama_perusahaan}</p>
          </div>
          <p className="text-brand-5 font-[500]">{schedule.id_kereta.id_kelas_kereta.tipe_kelas}</p>
        </div>
        <div className="flex items-center space-x-12">
          <div>
            <p className="text-[#202020] font-[600]">{dayjs(schedule.tanggal_keberangkatan).format('DD MMM YYYY')}</p>
            <p className="text-[#202020] font-medium">{schedule.jam_keberangkatan!.split(':').slice(0, 2).join(':')}</p>
            <p className="text-[#202020] font-medium">{schedule.asal_keberangkatan}</p>
          </div>
          <div className="bg-[#808080] w-full h-0.5"></div>
          <div>
            <p className="text-[#202020] text-end font-[600]">{dayjs(schedule.tanggal_pulangan).format('DD MMM YYYY')}</p>
            <p className="text-[#202020] text-end font-medium">{schedule.jam_pulangan!.split(':').slice(0, 2).join(':')}</p>
            <p className="text-[#202020] text-end font-medium">{schedule.tujuan_keberangkatan}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectedTicket;
