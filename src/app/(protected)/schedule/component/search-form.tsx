"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchForm = () => {
  const { replace } = useRouter();
  const [formValue, setFormValue] = useState({
    from: "",
    dest: "",
    date: "",
  });

  const handleSearch = () => {
    replace(`/schedule?from=${formValue.from}&dest=${formValue.dest}`);
  };
  return (
    <>
      <div className="space-y-4">
        <div className="flex space-x-4">
          <input
            value={formValue.from}
            onChange={(e) => {
              setFormValue((prev) => ({
                ...prev,
                ["from"]: e.target.value,
              }));
            }}
            className="border-b bg-transparent text-[14px] text-[#808080] py-4 w-full outline-none"
            placeholder="Bandung, Indonesia"
          />
          <input
            value={formValue.dest}
            onChange={(e) => {
              setFormValue((prev) => ({
                ...prev,
                ["dest"]: e.target.value,
              }));
            }}
            className="border-b bg-transparent text-[14px] text-[#808080] py-4 w-full outline-none"
            placeholder="Jakarta, Indonesia"
          />
        </div>
        <input
          type="date"
          className="border-b bg-transparent text-[14px] text-[#808080] py-4 w-full outline-none"
          placeholder="Jakarta, Indonesia"
        />
      </div>
      <button className="bg-brand-6 text-[14px] font-[600] text-white py-4 w-full outline-none rounded-lg"
      onClick={handleSearch}
      >
        Cari Kereta
      </button>
    </>
  );
};

export default SearchForm;
