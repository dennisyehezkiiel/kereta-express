import Link from "next/link";

const UserLog = () => {
  const menu = [
    {
      name: "Konfirmasi Pembayaran",
      href: '/schedule'
    },
    {
      name: "Pembayaran",
      href: '/schedule'
    },
    {
      name: "Riwayat Pemesanan",
      href: '/payment-history'
    },
  ];
  return (
    <div className="flex justify-center w-full">
      <div className="flex justify-center bg-transparant border py-4 rounded-lg space-x-4 w-[780px]">
        {menu?.map((el, index) => (
          <Link href={el.href} key={index} className="text-brand-5 text-medium font-[600]">
            {el.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UserLog;
