'use client'
import { Database } from "@/lib/database.type";
import { formatToRupiah } from "@/lib/formatter";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";

const ScheduleCard = ({schedule}: {schedule: Database['public']['Tables']['jadwal_keberangkatan']['Row']}) => {
  const {push} = useRouter()
  
  return (
    <>
      <div className="bg-white rounded-lg w-[900px] p-6 space-y-3 cursor-pointer"
        onClick={() => push(`/passanger-information?selected=${schedule.id_jadwal_keberangkatan}`)}
      >
        <div>
          <p className="text-[#202020] font-[600]">{schedule?.id_kereta?.nama_kereta}</p>
          <p className="text-[#202020] font-[600]">{schedule.id_kereta.nama_perusahaan}</p>
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
        <div className="flex flex-col justify-center items-center p-6 bg-[#D0FFC8] rounded-lg space-y-2 w-fit">
          <p className="text-[#202020] font-[600]">{schedule.id_kereta.id_kelas_kereta.tipe_kelas}</p>
          <div className="flex space-x-4">
            <p className="text-[#202020] font-[600]">Harga</p>
            <p className="text-[#202020] font-[600]">{formatToRupiah(schedule.harga!)}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduleCard;
