import { getScheduleDetail } from "@/action/schedule";
import SelectedTicket from "@/components/card/selected-ticket";
import { ParamProps } from "@/interface/type";

const PassangerInformation = async ({ searchParams }: ParamProps) => {
  const scheduleDetail = await getScheduleDetail(searchParams.selected);
  
  return (
    <div className="flex flex-col justify-center items-center space-y-4 w-full">
      <div className="flex flex-col justify-center space-y-6 pt-6">
        <p className="text-[36px] text-brand-5 text-center font-[700]">
          Isi Data Penumpang
        </p>
        <div className="bg-white rounded-lg border p-10 space-y-5">
          <p className="text-[#202020] text-[20px] font-medium">
            Data Penumpang
          </p>
          <div className="bg-brand-1 rounded-lg p-2">
            <p className="text-[#202020] text-[16px] font-medium">
              1. Penumpang
            </p>
          </div>
          <div>
            <p className="text-[#202020] text-[16px] font-medium">
              Travellers Details
            </p>
            <div className="grid grid-cols-2 gap-5">
              <input
                className="border-b bg-transparent text-[14px] text-[#808080] py-4 w-full outline-none"
                placeholder="Nama Lengkap"
              />
              <select className="border-b bg-transparent text-[14px] text-[#808080] py-4 w-full outline-none">
                <option>Jenis Kelamin</option>
                <option>Pria</option>
                <option>Wanita</option>
              </select>
              <input
                className="border-b bg-transparent text-[14px] text-[#808080] py-4 w-full outline-none"
                placeholder="No KTP"
              />
              <input
                type="date"
                className="border-b bg-transparent text-[14px] text-[#808080] py-4 w-full outline-none"
                placeholder="Tanggal Lahir"
              />
            </div>
          </div>
          <button className="text-white text-[16px] font-[600] border border-brand-5 bg-brand-5 p-3 w-full rounded-lg">
            Simpan
          </button>
        </div>
        <div className="space-y-4">
          <SelectedTicket schedule={scheduleDetail?.[0]!} />
        </div>
      </div>
    </div>
  );
};

export default PassangerInformation;
