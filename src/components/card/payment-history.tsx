import { formatToRupiah } from "@/lib/formatter";
import dayjs from "dayjs";

const PaymentHistoryCard = ({ history }: { history: HistoryDetail }) => {
  return (
    <>
      <div className="bg-white rounded-lg w-[900px] p-6 space-y-3">
        <div className="flex justify-center">
          <p className="text-[#202020] font-[500]">
            Transaction ID: 351511859256378
          </p>
        </div>
        <div>
          <p className="text-[#202020] text-[20px] font-[600]">
            {history.id_jadwal_keberangkatan.id_kereta.nama_kereta}
          </p>
          <p className="text-[#202020] text-[20px] font-[600]">
            {history.id_jadwal_keberangkatan.id_kereta.nama_perusahaan}
          </p>
        </div>
        <div className="space-y-1">
          <p className="text-[#202020] text-[14px] font-[500]">
            Status Pembayaran
          </p>
          <p className="text-[#202020] text-[14px] font-[500] border border-brand-7 px-2 py-1 w-fit rounded-lg">
            {history.id_status.status}
          </p>
        </div>
        <div className="flex items-center space-x-12">
          <div>
            <p className="text-[#202020] font-[600]">
              {dayjs(
                history.id_jadwal_keberangkatan.tanggal_keberangkatan
              ).format("DD MMM YYYY")}
            </p>
            <p className="text-[#202020] font-medium">
              {history.id_jadwal_keberangkatan
                .jam_keberangkatan!.split(":")
                .slice(0, 2)
                .join(":")}
            </p>
            <p className="text-[#202020] font-medium">
              {history.id_jadwal_keberangkatan.asal_keberangkatan}
            </p>
          </div>
          <div className="bg-[#808080] w-full h-0.5"></div>
          <div>
            <p className="text-[#202020] text-end font-[600]">
              {dayjs(history.id_jadwal_keberangkatan.tanggal_pulangan).format(
                "DD MMM YYYY"
              )}
            </p>
            <p className="text-[#202020] text-end font-medium">
              {history.id_jadwal_keberangkatan
                .jam_pulangan!.split(":")
                .slice(0, 2)
                .join(":")}
            </p>
            <p className="text-[#202020] text-end font-medium">
              {history.id_jadwal_keberangkatan.tujuan_keberangkatan}
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-[#202020] text-[20px] font-[700]">Total Biaya</p>
          <p className="text-[#202020] text-[20px] font-[700]">
            {formatToRupiah(history.id_jadwal_keberangkatan.harga!)}
          </p>
        </div>
        {history.id_status.status === "Sudah dibayar" && (
          <div className="flex flex-col space-y-2">
            <button className="text-[#202020] text-[16px] font-[600] border border-brand-5 p-4 w-[290px] rounded-lg">
              Upload bukti pembayaran
            </button>
            <button className="text-white text-[16px] font-[600] border border-brand-5 bg-brand-5 p-4 w-[290px] rounded-lg">
              Download Tiket
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default PaymentHistoryCard;
