import Image from "next/image";

const Navigation = () => {
  const naviationMenu = [
    {
      name: "Beranda",
      href: "/schedule",
    },
    {
      name: "Jadwal Keberangkatan",
      href: "/schedule",
    },
    {
      name: "Pesan Kereta",
      href: "/schedule",
    },
    {
      name: "Hubungi Kami",
      href: "/schedule",
    },
  ];

  return (
    <div className="flex items-center justify-between bg-brand-0 h-[120px] px-[131px]">
      <div className="relative h-32 w-32">
        <Image src="/blueLogo.svg" alt="blueLogo" fill />
      </div>
      <div className="space-x-4">
        {naviationMenu?.map((el, index) => (
          <a className="text-brand-5 text-medium font-[600]" key={index} href={el.href}>
            {el.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
