"use client";

import { insertOrder } from "@/action/order";
import { getPassanger, insertPassangerInformation } from "@/action/passanger";
import { useRouter } from "next/navigation";
import { useState } from "react";

const PassangerInformationForm = ({ schedule }: { schedule: ScheduleList }) => {
  const { push } = useRouter();
  const [formValue, setFormValue] = useState({
    name: "",
    gender: "",
    nik: "",
    date: "",
  });

  const handleSubmit = async () => {
    const [day, month, year] = formValue.date.split("-");
    const date = new Date(`${year}-${month}-${day}`);

    const response = await insertPassangerInformation({
      ...formValue,
      date: date,
      orderId: schedule.id_jadwal_keberangkatan,
    });

    if (!response.error) {
      const passanger = await getPassanger();
      const orderResponse = await insertOrder({
        scheduleId: schedule.id_jadwal_keberangkatan,
        passangerId: passanger?.[0]?.id_data_penumpang,
      });
      !orderResponse && push("/payment");
    }
  };

  return (
    <div className="bg-white rounded-lg border p-10 space-y-5">
      <p className="text-[#202020] text-[20px] font-medium">Data Penumpang</p>
      <div className="bg-brand-1 rounded-lg p-2">
        <p className="text-[#202020] text-[16px] font-medium">1. Penumpang</p>
      </div>
      <div>
        <p className="text-[#202020] text-[16px] font-medium">
          Travellers Details
        </p>
        <div className="grid grid-cols-2 gap-5">
          <input
            value={formValue.name}
            onChange={(e) =>
              setFormValue((prev) => ({
                ...prev,
                ["name"]: e.target.value,
              }))
            }
            className="border-b bg-transparent text-[14px] text-[#808080] py-4 w-full outline-none"
            placeholder="Nama Lengkap"
          />
          <select
            className="border-b bg-transparent text-[14px] text-[#808080] py-4 w-full outline-none"
            value={formValue.gender}
            onChange={(e) =>
              setFormValue((prev) => ({
                ...prev,
                ["gender"]: e.target.value,
              }))
            }
          >
            <option>Jenis Kelamin</option>
            <option value={"Pria"}>Pria</option>
            <option value={"Wanita"}>Wanita</option>
          </select>
          <input
            value={formValue.nik}
            onChange={(e) =>
              setFormValue((prev) => ({
                ...prev,
                ["nik"]: e.target.value,
              }))
            }
            className="border-b bg-transparent text-[14px] text-[#808080] py-4 w-full outline-none"
            placeholder="No KTP"
          />
          <input
            type="date"
            value={formValue.date}
            onChange={(e) =>
              setFormValue((prev) => ({
                ...prev,
                ["date"]: e.target.value,
              }))
            }
            className="border-b bg-transparent text-[14px] text-[#808080] py-4 w-full outline-none"
            placeholder="Tanggal Lahir"
          />
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="text-white text-[16px] font-[600] border border-brand-5 bg-brand-5 p-3 w-full rounded-lg"
      >
        Simpan
      </button>
    </div>
  );
};

export default PassangerInformationForm;
