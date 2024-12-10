import dayjs from "dayjs";

const PaymentCard = ({ orderDetail }: { orderDetail: HistoryDetail }) => {
  return (
    <>
      <div className="bg-brand-1 rounded-lg w-[900px] p-6 space-y-6">
        <div className="flex justify-start">
          <p className="text-[#202020] font-[500]">Detail Keberangkatan</p>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-[#202020] font-[500]">
              {orderDetail.id_jadwal_keberangkatan.id_kereta.nama_kereta}
            </p>
            <p className="text-[#202020] font-[500]">
              {orderDetail.id_jadwal_keberangkatan.id_kereta.nama_perusahaan}
            </p>
          </div>
          <p className="text-brand-4 font-[500]">Ekonomi</p>
        </div>
        <div className="flex items-center space-x-12">
          <div>
            <p className="text-[#202020] font-[600] whitespace-nowrap w-full">
              {dayjs(
                orderDetail.id_jadwal_keberangkatan.tanggal_keberangkatan
              ).format("DD MMM YYYY")}
            </p>
            <p className="text-[#202020] font-medium">
              {orderDetail.id_jadwal_keberangkatan
                .jam_keberangkatan!.split(":")
                .slice(0, 2)
                .join(":")}
            </p>
            <p className="text-[#202020] font-medium">
              {orderDetail.id_jadwal_keberangkatan.asal_keberangkatan}
            </p>
          </div>
          <div className="bg-[#808080] w-full h-0.5"></div>
          <div>
            <p className="text-[#202020] font-[600] whitespace-nowrap w-full">
              {dayjs(
                orderDetail.id_jadwal_keberangkatan.tanggal_pulangan
              ).format("DD MMM YYYY")}
            </p>
            <p className="text-[#202020] text-end font-medium">
              {orderDetail.id_jadwal_keberangkatan
                .jam_pulangan!.split(":")
                .slice(0, 2)
                .join(":")}
            </p>
            <p className="text-[#202020] text-end font-medium">
              {orderDetail.id_jadwal_keberangkatan.tujuan_keberangkatan}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between space-y-3">
          <p className="text-[#202020] text-[20px] font-[700]">
            Detail Penumpang
          </p>
          <div className="flex justify-between space-y-2">
            <div className="flex flex-col space-y-1">
              <p className="text-[#202020] font-medium">Nama Penumpang</p>
              <p className="text-[14px] text-[#808080] font-[400] capitalize">
                {orderDetail.id_data_penumpang.nama_penumpang}
              </p>
            </div>
            <div className="flex flex-col space-y-1">
              <p className="text-[#202020] font-medium">Jenis Kelamin</p>
              <p className="text-[14px] text-[#808080] font-[400] capitalize">
                {orderDetail.id_data_penumpang.jenis_kelamin}
              </p>
            </div>
            <div className="flex flex-col space-y-1">
              <p className="text-[#202020] font-medium">No KTP</p>
              <p className="text-[14px] text-[#808080] font-[400] capitalize">
                {orderDetail.id_data_penumpang.nik}
              </p>
            </div>
            <div className="flex flex-col space-y-1">
              <p className="text-[#202020] font-medium">Tanggal Lahir</p>
              <p className="text-[14px] text-[#808080] font-[400] capitalize">
                {dayjs(orderDetail.id_data_penumpang.tanggal_lahir).format(
                  "DD MMM YYYY"
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentCard;
