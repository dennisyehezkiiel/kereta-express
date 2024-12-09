const UserLog = () => {
  const menu = [
    {
      name: "Konfirmasi Pembayaran",
    },
    {
      name: "Pembayaran",
    },
    {
      name: "Riwayat Pemesanan",
    },
  ];
  return (
    <div className="flex justify-center w-full">
      <div className="flex justify-center bg-transparant border py-4 rounded-lg space-x-4 w-[780px]">
        {menu?.map((el, index) => (
          <span key={index} className="text-brand-5 text-medium font-[600]">
            {el.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default UserLog;
